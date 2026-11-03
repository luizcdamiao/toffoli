import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { assuntos } from '../../data/site';

export const prerender = false;

const json = (corpo: unknown, status = 200) =>
  new Response(JSON.stringify(corpo), { status, headers: { 'Content-Type': 'application/json; charset=utf-8' } });

// Limite simples por IP (memória do processo). Suficiente para uma instância única.
const janela = 10 * 60_000;
const maximo = 5;
const historico = new Map<string, number[]>();
function excedeu(ip: string) {
  const agora = Date.now();
  const lista = (historico.get(ip) ?? []).filter((t) => agora - t < janela);
  lista.push(agora);
  historico.set(ip, lista);
  return lista.length > maximo;
}

const limpar = (v: FormDataEntryValue | null, max: number) =>
  String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const d = await request.formData().catch(() => null);
  if (!d) return json({ ok: false, mensagem: 'Requisição inválida.' }, 400);

  // Spam: campo oculto preenchido ou envio rápido demais. Responde como sucesso, sem enviar.
  const tempo = Date.now() - Number(d.get('t') ?? 0);
  if (String(d.get('site') ?? '') !== '' || !(tempo > 3000)) return json({ ok: true });

  let ip = 'desconhecido';
  try {
    ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || clientAddress;
  } catch {
    /* sem IP disponível */
  }
  if (excedeu(ip)) return json({ ok: false, mensagem: 'Muitas tentativas. Aguarde alguns minutos.' }, 429);

  const nome = limpar(d.get('nome'), 120);
  const empresa = limpar(d.get('empresa'), 120);
  const telefone = limpar(d.get('telefone'), 30);
  const email = limpar(d.get('email'), 160);
  const assuntoValor = limpar(d.get('assunto'), 60);
  const mensagem = String(d.get('mensagem') ?? '').trim().slice(0, 3000);
  const assunto = assuntos.find((a) => a.valor === assuntoValor);

  const erros: Record<string, string> = {};
  if (!nome) erros.nome = 'Informe seu nome.';
  if (telefone.replace(/\D/g, '').length < 8) erros.telefone = 'Informe um telefone válido.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) erros.email = 'Informe um e-mail válido.';
  if (!assunto) erros.assunto = 'Escolha um assunto.';
  if (mensagem.length < 10) erros.mensagem = 'Escreva uma mensagem com pelo menos 10 caracteres.';
  if (d.get('consentimento') !== 'sim') erros.consentimento = 'É preciso concordar para enviar.';
  if (Object.keys(erros).length) return json({ ok: false, erros }, 422);

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    console.error('Formulário: SMTP não configurado (SMTP_HOST, SMTP_USER, SMTP_PASS).');
    return json(
      { ok: false, mensagem: 'O envio por formulário está temporariamente indisponível. Fale pelo WhatsApp ou por e-mail.' },
      503,
    );
  }

  const porta = Number(process.env.SMTP_PORT ?? 465);
  const transporte = nodemailer.createTransport({ host, port: porta, secure: porta === 465, auth: { user, pass } });

  try {
    await transporte.sendMail({
      from: `"Site Toffoli & Antônio" <${user}>`,
      to: process.env.MAIL_TO ?? 'tofolieantonio@gmail.com',
      replyTo: `"${nome.replace(/"/g, '')}" <${email}>`,
      subject: `[Site] ${assunto!.rotulo} - ${nome}`,
      text: [
        `Assunto: ${assunto!.rotulo}`,
        `Nome: ${nome}`,
        `Empresa: ${empresa || '-'}`,
        `Telefone/WhatsApp: ${telefone}`,
        `E-mail: ${email}`,
        `Consentimento de privacidade: sim`,
        '',
        mensagem,
      ].join('\n'),
    });
    return json({ ok: true });
  } catch (e) {
    console.error('Formulário: falha no envio', e);
    return json({ ok: false, mensagem: 'Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.' }, 502);
  }
};

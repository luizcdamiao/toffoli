# Toffoli & Antônio — site institucional (one page)

Astro + TypeScript + CSS. HTML estático, com uma rota de servidor (`/api/contato`) para o formulário.

## Comandos

```bash
npm install
npm run dev       # desenvolvimento
npm run build     # checagem de tipos + build de produção
npm start         # serve dist/ (Node)
```

## Onde editar

- Textos e dados da empresa: `src/data/site.ts` (fonte única).
- Fotos reais: soltar em `src/assets/fotos/` com os nomes `hero`, `empresa`, `estruturas-metalicas`, `caldeiraria` (jpg, png ou webp). Sem arquivo, a seção usa o escudo da marca.
- Produtos e Projetos: preencher `produtos` e `projetos` em `src/data/site.ts`. Vazios, as seções e os itens de menu não aparecem.
- Estilos: `src/styles/global.css`.

## Publicação (Docker / EasyPanel)

Homologação (padrão): `noindex`, `robots.txt` bloqueado, sem canonical.
Produção: build com `SITE_URL=https://dominio-oficial` e `SITE_ENV=production` (ver `Dockerfile`).
Isso ativa canonical, sitemap, `index, follow` e URLs absolutas.

Variáveis de ambiente do formulário (somente no servidor, ver `.env.example`):
`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_TO`. Sem elas, o formulário responde erro 503 com mensagem clara; nunca simula sucesso.

## Pendências

Ver `../01-ESTRUTURA-SITE-TOFFOLI.md` (fotos, logo vetorial, domínio, CEP, produtos, projetos, depoimentos).

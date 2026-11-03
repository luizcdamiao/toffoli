# Toffoli & Antônio — Estrutura do site (v0.1, para aprovação)

Status: planejamento. Nada foi desenvolvido. Método: negócio → cliente → desejo → oferta → copy → estrutura → design → código (material de treinamento + skill LCD). Este documento cobre as etapas 1 a 3 do prompt mestre (auditoria, arquitetura/conteúdo, direção visual).

---

## 1. Auditoria do site atual

Inspecionada a home (`html-toffoli.3gjynb.easypanel.host`). As 4 páginas de serviço não foram abertas nesta rodada; os links existem (`/servicos/...`) e serão tratados como redirecionamentos.

### Problemas encontrados (prioridade alta)

| # | Achado | Evidência | Ação na reconstrução |
|---|---|---|---|
| 1 | Números inventados: "10.000+ Projetos Concluídos", "100% Satisfação Garantida", "25+ anos" | Texto da home | Remover. Usar só "Experiência na área desde 1994" |
| 2 | Horário de atendimento publicado (Seg–Sex 7h–12h / 13h–17h) | Seção Contato | Remover (não confirmado) |
| 3 | CEP divergente: site antigo 37842-899, briefing 37795-000 | Seção Contato | Usar o do briefing; **confirmar com o cliente** |
| 4 | Canonical aponta para `industrialpro.com.br` (resto de template) | `<link rel=canonical>` | Canonical só do domínio oficial (a confirmar) |
| 5 | Sem dados estruturados (JSON-LD) | 0 blocos | Criar Organization/LocalBusiness/Service |
| 6 | Sem fotos reais; hero é imagem genérica de fundo metálico | `hero-industrial-*.jpg` | Fotos reais da empresa (pendência) |
| 7 | Copy genérica de template ("transformamos ideias em realidade", "inovação", "tecnologias avançadas") | Texto da home | Reescrever com fatos |
| 8 | "Máquinas Industriais" como serviço; Estruturas Metálicas e Caldeiraria sem prioridade | Home | Reorganizar conforme prioridades do cliente |
| 9 | Projeto gerado em Lovable, 4 sub-rotas sem fonte original | URLs `/lovable-uploads/` | Reconstruir do zero, sem reaproveitar código |

### Pontos a favor / reaproveitável

- Logo (escudo com estrutura metálica + "Tóffoli & Antônio / Estruturas Metálicas") — é o ativo de marca principal; o arquivo enviado em anexo tem fundo azul-marinho, precisamos de versão **vetorial ou PNG transparente**.
- Endereço, WhatsApp e e-mail (já oficiais no briefing).
- Nada de código ou imagem do site antigo será copiado.

### Pendente de verificação (não feito)

- `robots.txt`, `sitemap.xml`, se o site antigo está indexado no Google, e conteúdo das 4 subpáginas.

---

## 2. Pesquisa e estratégia (equivalente às Partes 2–6 do treinamento)

**Pesquisa de mercado (a fazer antes do design):** olhar 3 a 5 empresas de estruturas metálicas/caldeiraria da região (Sul de Minas e Mogi Mirim/Pinhal) para ver como organizam serviços, fotos e provas. Serve para aprender estrutura, não para copiar. Pendente; posso fazer com busca web se aprovar.

**Negócio:** metalúrgica familiar em Andradas, MG, com experiência na área desde 1994.

**Quem compra (hipótese a validar com o cliente):**
1. Compras/manutenção/engenharia de indústrias (cerâmica, injeção plástica, componentes elétricos e plásticos): precisam de plataformas, estruturas para máquinas, dutos, coifas, adaptações e manutenção.
2. Produtor rural: barracões e coberturas.
3. Particular: telhado, pergolado, portão, grade.
4. Secundários: candidatos (Trabalhe Conosco) e fornecedores/parceiros.

**Desejo (não confundir com produto):** o comprador industrial quer "uma empresa que resolva sem parar minha produção, execute o que foi combinado e volte se precisar". O produtor quer "um barracão pronto sem dor de cabeça". Esse é o fio da copy.

**Dores prováveis (hipótese):** parada de máquina esperando serviço; fornecedor que some após a entrega; orçamento difícil de comparar; falta de visita técnica antes de orçar.

**Provas disponíveis hoje:** experiência desde 1994; atendimento após a entrega; treinamentos da equipe em NR 06, 12, 34 e 35; processo de visita + orçamento em PDF. **Provas que ainda faltam:** fotos reais, depoimentos autorizados, clientes autorizados.

**Conversão:** institucional, sem pressão. Ação única: **entrar em contato** (formulário como destino principal, WhatsApp discreto e fixo). Nada de "Solicitar orçamento" no hero. Este ponto adapta o treinamento (uma conversão por página) ao pedido do cliente (site institucional, não landing de vendas).

---

## 3. Arquitetura da One Page

Menu: **Empresa · Serviços · Produtos · Projetos · Contato** (5 itens; no celular, painel recolhível com os mesmos itens). Logo à esquerda. Sem botão de orçamento no cabeçalho.

Ordem das seções (responde as perguntas do visitante na ordem em que surgem):

| # | Seção | Pergunta que responde | Peso visual | Fundo |
|---|---|---|---|---|
| 1 | Header | Onde cheguei? | baixo | azul #001E3D |
| 2 | Hero | Quem são e o que fazem? | alto | foto + azul |
| 3 | Empresa `#empresa` | Posso confiar? | médio | branco |
| 4 | Serviços `#servicos`: **Estruturas Metálicas** | Fazem o que preciso? | alto | cinza claro |
| 5 | Serviços: **Caldeiraria** | idem | alto (igual ao 4) | azul escuro |
| 6 | Outras soluções | E o resto? | baixo, compacto | branco |
| 7 | Segmentos e regiões | Atendem meu setor e minha cidade? | médio | cinza claro |
| 8 | Como trabalhamos | Como funciona? | médio | branco |
| 9 | Produtos `#produtos` | Têm produto pronto? | **oculto até haver conteúdo** | — |
| 10 | Projetos `#projetos` | Já fizeram isso? | **oculto até haver fotos autorizadas** | — |
| 11 | Diferenciais e equipe | Por que eles? | médio | azul escuro |
| 12 | Depoimentos | Outros confiam? | **omitido até haver reais** | — |
| 13 | FAQ | Dúvidas finais | baixo | branco |
| 14 | Contato `#contato` | Como falo com eles? | alto | cinza claro |
| 15 | Rodapé | Dados e privacidade | baixo | azul |

**Decisão a tomar:** o menu pedido pelo cliente tem Produtos e Projetos, mas ainda não há conteúdo. Recomendação: no menu, esses dois itens só aparecem quando as seções forem publicadas (o build controla isso por dados). Na primeira versão o menu fica **Empresa · Serviços · Contato** (+ Segmentos opcional). O cliente pediu os atalhos, então preciso da sua confirmação.

### Teste dos títulos (ler só os H1/H2)

H1 Estruturas Metálicas e Caldeiraria → H2 Empresa: experiência na área desde 1994 → H2 Estruturas Metálicas → H2 Caldeiraria → H2 Outras soluções → H2 Quem atendemos → H2 Como trabalhamos → H2 Diferenciais → H2 Perguntas frequentes → H2 Contato. A história faz sentido sozinha.

---

## 4. Copy-base (rascunho; só fatos confirmados)

**Hero**
- Título (H1, menor que no site antigo): *Estruturas Metálicas e Caldeiraria*
- Apoio (uma frase): *Soluções para indústrias, agronegócio e projetos residenciais, com experiência e compromisso em cada trabalho.*
- Link discreto: *Conheça nossas soluções ↓* (âncora `#servicos`)
- Sem números, sem botão de orçamento. Localização pequena: *Andradas, MG*.

**Empresa**
- H2: *Experiência na área desde 1994*
- Texto curto: *A Toffoli & Antônio atua com estruturas metálicas e caldeiraria para indústrias, propriedades rurais e clientes residenciais de Andradas e região. O trabalho é conduzido com compromisso, agilidade no atendimento e acompanhamento depois da entrega.*
- Não dizer "fundada em 1994". Não contar história além do que o cliente informou (**pendência:** quem são os sócios, como começou, para um parágrafo humano real).

**Estruturas Metálicas** (lista conforme briefing)
Barracões industriais · Barracões para o agronegócio · Estruturas para telhados · Coberturas com telhas galvanizadas simples · Coberturas com telhas termoacústicas · Soluções com forro · Fechamentos laterais com telhas.
Texto: explicar aplicação em linguagem simples (ex.: "para armazenar, produzir ou abrigar"), sem números de vão, carga ou garantia.

**Caldeiraria**
Plataformas para manutenção · Estruturas para máquinas · Coifas · Dutos · Silos · Tanques · Caldeiras · Chaminés · Escadas · Corrimãos · Bancadas · Adaptações e manutenções industriais.
Cuidado: sem dizer "certificado", "pressurizado" ou "conforme norma X" para os equipamentos.

**Outras soluções (compacto, lista única):** Telhados residenciais · Pergolados · Portões · Grades · Serviços de torno · Serviços de fresa.

**Segmentos:** indústrias de cerâmica, injeção plástica, componentes elétricos e plásticos; agronegócio; residencial (telhados, portões, grades). **Sem citar** Siamp, Kohler, Aumovio, Weir Minerals ou Syngenta.

**Regiões:** atendimento principal em Andradas, Jacutinga, Albertina, Ibitiúra de Minas, Santa Rita de Caldas e Ipuiúna (MG), Espírito Santo do Pinhal e Santo Antônio do Jardim (SP); com menor frequência em Ouro Fino (MG), Mogi Guaçu e São João da Boa Vista (SP). Escrito uma vez, em frase corrida, sem repetição artificial.

**Como trabalhamos (6 passos, só os confirmados)**
1. Você entra em contato. 2. Avaliamos a necessidade. 3. Conforme o serviço, fazemos visita técnica antes do orçamento; em outros casos, o orçamento vem primeiro e a visita ocorre depois da aprovação. 4. O orçamento é enviado em PDF. 5. Após a aprovação, o serviço é programado. 6. Execução. *O prazo médio de 30 dias fica fora da v1, até aprovação específica.*

**Diferenciais:** Experiência na área · Compromisso com o trabalho · Agilidade no atendimento · Qualidade dos serviços · Atendimento após a entrega (uma frase factual cada, sem adjetivo vazio).

**Equipe e treinamentos (discreto):** *A equipe possui treinamentos relacionados às NR 06, NR 12, NR 34 e NR 35.* Nunca "certificada".

**FAQ (6 perguntas do briefing)** respondidas só com o que está confirmado (tipos de estrutura, serviços de caldeiraria, indústria e residencial, visita técnica "conforme o serviço", como orçar, regiões).

**Contato:** formulário (Nome, Empresa opcional, Telefone/WhatsApp, E-mail, Assunto, Mensagem), consentimento de privacidade. Assuntos: Estruturas Metálicas, Caldeiraria, Telhados e Pergolados, Portões e Grades, Torno e Fresa, Produtos, Trabalhe Conosco, Parceiro/Fornecedor, Outros. Dados: Sítio Santo Antônio, Angola, Andradas, MG · (35) 99716-5431 · tofolieantonio@gmail.com. **Sem horário.**

**Rodapé:** `#contato?assunto=trabalhe-conosco` e `?assunto=parceiro-fornecedor` pré-selecionam o assunto.

**WhatsApp flutuante:** estático, sem animação, `wa.me/5535997165431?text=Olá! Gostaria de conversar sobre um serviço da Toffoli & Antônio.`

---

## 5. SEO e GEO (plano)

- Uma H1, H2/H3 hierárquicos, HTML estático (Astro), conteúdo legível sem JS.
- Title (rascunho): *Estruturas Metálicas e Caldeiraria em Andradas, MG | Toffoli & Antônio*.
- Description (rascunho): *Estruturas metálicas, coberturas e caldeiraria industrial em Andradas, MG. Experiência na área desde 1994, atendendo indústrias, agronegócio e clientes residenciais na região.*
- Canonical absoluto no domínio oficial (**pendente**); homologação com `noindex` e `robots` bloqueado.
- JSON-LD: `LocalBusiness` (endereço, telefone, e-mail, `areaServed`) + `Service` para os dois serviços principais + `FAQPage` só se o texto visível for idêntico. Sem avaliação, preço, rating ou certificação.
- Imagens WebP/AVIF com dimensões, ALT descritivo, `og:image`.
- Redirecionamentos 301 de `/servicos/estruturas-metalicas` → `/#estruturas-metalicas`, `/servicos/caldeiraria` → `/#caldeiraria`, `/servicos/serralheria` e `/servicos/maquinas-industriais` → `/#outras-solucoes` (a confirmar se há indexação).
- GEO: fatos consistentes em hero, empresa, FAQ e JSON-LD; sem promessa de citação em IA.

---

## 6. Direção visual (proposta, para aprovação)

**Conceito:** industrial sóbrio e editorial: muito branco e cinza, azul #001E3D como ancoragem, fotografia real em grande formato, tipografia forte e calma.

- **Cores:** #001E3D (principal), #243B53, #64748B, #F2F4F6, #FFFFFF, #20252B. Alternar seções claras/escuras (branco → cinza → azul → branco). Nota: o logo enviado tem fundo azul um pouco mais claro que #001E3D; vamos usar o logo sobre #001E3D e **conferir o contraste** (idealmente versão em arquivo transparente).
- **Tipografia:** títulos em serifa de display com peso médio (combina com o "Tóffoli & Antônio" do logo, que usa serifa clássica) + corpo em sans neutro (ex.: Inter ou Source Sans), self-host, 2 famílias no máximo. Título do hero bem menor que o do site antigo (máx. ~56 px desktop, ~34 px celular).
- **Hero:** foto real em tela cheia com camada azul, título em 1–2 linhas, uma frase, link discreto. Menos texto que o atual.
- **Composições variadas:** Estruturas Metálicas (foto grande à esquerda + lista), Caldeiraria (foto à direita, fundo azul), Outras soluções em lista compacta; Como trabalhamos em linha numerada horizontal; sem grade repetitiva de cards.
- **Movimento:** só revelação suave ao rolar, sem loops, `prefers-reduced-motion` respeitado. WhatsApp parado.
- **Mobile first:** menu recolhível, alvos de toque ≥ 44 px, formulário em coluna única, botão do WhatsApp que não cobre o formulário.

---

## 7. Pendências de conteúdo (nada disso será inventado)

| Item | Quem fornece | Bloqueia |
|---|---|---|
| Fotos reais (obras, oficina, produtos, equipe, fachada) | Cliente | Hero, Serviços, Projetos |
| Logo em vetor/PNG transparente | Cliente | Header |
| Domínio oficial | Cliente | Canonical, sitemap, OG |
| CEP correto (37795-000 vs 37842-899) | Cliente | Rodapé, JSON-LD |
| Nomes de sócios / história curta | Cliente | Seção Empresa |
| Produtos reais (lista, imagem, descrição) | Cliente | Seção Produtos |
| Projetos autorizados (foto + descrição) | Cliente | Seção Projetos |
| Depoimentos reais com autorização | Cliente | Seção Depoimentos |
| Prazo médio de 30 dias: publicar ou não | Cliente | Como trabalhamos |
| Currículo por upload ou só e-mail | Decisão técnica | Formulário |
| Envio do formulário (SMTP/serviço) e hospedagem do backend | Decisão técnica | Formulário |
| Site antigo indexado? | Verificar (Search Console) | Redirecionamentos |

---

## 8. Decisões que preciso de você

1. **Menu da v1:** esconder Produtos/Projetos até haver conteúdo (recomendado) ou mostrar com seção "em breve" (não recomendado: parece protótipo).
2. **Stack:** Astro + TypeScript + CSS, como no briefing.
3. **Formulário:** função de servidor (Node no EasyPanel, via SMTP do Gmail com senha de app) ou serviço externo? Qual existe na sua infraestrutura?
4. **Direção visual** da seção 6, ou prefere ver duas alternativas distintas antes?
5. **Pesquisa de mercado** (3–5 concorrentes): faço agora?

Depois da aprovação das seções 3, 4 e 6, começo a implementação.

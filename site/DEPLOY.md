# Publicação no EasyPanel

Não tenho acesso ao seu EasyPanel; este roteiro é para quem administra o servidor. O Docker não estava instalado na máquina de desenvolvimento, então o `Dockerfile` ainda **não foi construído como imagem**. O build (`npm run build`) e o servidor Node (`node dist/server/entry.mjs`) foram testados localmente.

## 1. Homologação (para mostrar ao cliente)

Crie um **novo serviço** (App) no EasyPanel. Não altere nem substitua o serviço `html-toffoli` que está no ar.

- **Fonte:** GitHub, `luizcdamiao/toffoli` (privado: conecte o GitHub ao EasyPanel ou use uma chave de deploy), branch `main`.
- **Build:** Dockerfile, caminho de build `site` (o `Dockerfile` está em `site/Dockerfile`).
- **Porta do serviço:** `4321`.
- **Domínio:** um subdomínio de teste. Mantenha os padrões `SITE_ENV=staging` e `SITE_URL` vazio: a página sai com `noindex`, o `robots.txt` bloqueia tudo e não há canonical.
- Nesta etapa as imagens `*.provisoria.jpg` funcionam normalmente.

## 2. Formulário (variáveis de ambiente do serviço, em tempo de execução)

| Variável | Valor |
|---|---|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `tofolieantonio@gmail.com` |
| `SMTP_PASS` | senha de app do Gmail (Conta Google > Segurança > Senhas de app; exige verificação em duas etapas) |
| `MAIL_TO` | `tofolieantonio@gmail.com` |

Sem essas variáveis, o formulário responde com erro claro e não finge sucesso. Depois de configurar, envie uma mensagem de teste pelo site e confira a caixa de entrada.

## 3. Produção (só depois de aprovado)

Antes: fotos reais no lugar das `*.provisoria.jpg` (o build de produção falha se sobrar alguma), CEP confirmado e domínio oficial definido.

Defina como **argumentos de build** (build args) do serviço:

- `SITE_URL=https://dominio-oficial` (sem barra no fim)
- `SITE_ENV=production`

Se o seu EasyPanel não repassar variáveis como build args, ajuste os valores padrão das linhas `ARG` no `Dockerfile`. Isso liga canonical, sitemap, `robots.txt` liberado e `index, follow`.

Depois do deploy, confira no site publicado: `view-source` com a canonical certa, `/robots.txt`, `/sitemap.xml` e um envio real do formulário.

## 4. Redirecionamentos do site antigo

Se as URLs antigas estiverem indexadas, configure no proxy (Traefik/EasyPanel) redirecionamentos 301:

- `/servicos/estruturas-metalicas` para `/#estruturas-metalicas`
- `/servicos/caldeiraria` para `/#caldeiraria`
- `/servicos/serralheria` e `/servicos/maquinas-industriais` para `/#outras-solucoes`

Verifique antes no Google Search Console se essas URLs realmente aparecem.

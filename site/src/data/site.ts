// Fonte única dos dados institucionais. Só entram fatos confirmados pelo cliente.

export const empresa = {
  nome: 'Toffoli & Antônio',
  slogan: 'Estruturas Metálicas e Caldeiraria',
  experiencia: 'Experiência na área desde 1994',
  telefone: '(35) 99716-5431',
  telefoneE164: '+5535997165431',
  whatsapp: '5535997165431',
  whatsappMensagem: 'Olá! Gostaria de conversar sobre um serviço da Toffoli & Antônio.',
  email: 'tofolieantonio@gmail.com',
  endereco: {
    rua: 'Sítio Santo Antônio, Angola',
    cidade: 'Andradas',
    uf: 'MG',
    // Igual ao perfil no Google Meu Negócio e ao site antigo (o briefing trazia 37795-000).
    cep: '37842-899',
    latitude: -22.0640989,
    longitude: -46.5850384,
  },
} as const;

// Perfil no Google Meu Negócio. A nota e a quantidade são do perfil em 03/11/2026: conferir antes de publicar.
export const google = {
  perfilUrl:
    'https://www.google.com/maps/place/T%C3%B3ffoli+e+Ant%C3%B4nio/@-22.0637763,-46.5849572,16.75z/data=!4m6!3m5!1s0x94c9bde6431f2611:0xb5ab60b441aff994!8m2!3d-22.0640989!4d-46.5850384!16s%2Fg%2F11trqxzcq7',
  mapaEmbed: 'https://www.google.com/maps?q=-22.0640989,-46.5850384&z=16&output=embed',
  nota: '4,9',
  avaliacoes: 18,
} as const;

export const whatsappUrl = `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(empresa.whatsappMensagem)}`;

export type Grupo = { titulo: string; itens: string[] };

export const estruturas: Grupo[] = [
  { titulo: 'Barracões', itens: ['Barracões industriais', 'Barracões para o agronegócio'] },
  {
    titulo: 'Telhados e coberturas',
    itens: [
      'Estruturas para telhados',
      'Coberturas com telhas galvanizadas simples',
      'Coberturas com telhas termoacústicas',
    ],
  },
  { titulo: 'Acabamentos', itens: ['Soluções com forro', 'Fechamentos laterais de estruturas com telhas'] },
];

export const caldeiraria: Grupo[] = [
  {
    titulo: 'Acesso e apoio',
    itens: ['Plataformas para manutenção', 'Escadas e corrimãos', 'Bancadas', 'Estruturas para máquinas'],
  },
  { titulo: 'Captação e condução', itens: ['Coifas', 'Dutos', 'Chaminés'] },
  { titulo: 'Reservatórios e equipamentos', itens: ['Silos', 'Tanques', 'Caldeiras'] },
  { titulo: 'Sob demanda', itens: ['Adaptações industriais', 'Manutenções industriais'] },
];

export const outrasSolucoes = [
  'Telhados residenciais',
  'Pergolados',
  'Portões',
  'Grades',
  'Serviços de torno',
  'Serviços de fresa',
];

export const segmentos = [
  {
    titulo: 'Indústria',
    texto:
      'Atendimento a indústrias de cerâmica, de injeção plástica e de componentes elétricos e plásticos, com serviços de caldeiraria e estruturas metálicas.',
  },
  { titulo: 'Agronegócio', texto: 'Barracões e coberturas para propriedades rurais.' },
  { titulo: 'Residencial', texto: 'Telhados, pergolados, portões e grades para casas e propriedades.' },
];

export const regioesPrincipais = [
  'Andradas, MG',
  'Jacutinga, MG',
  'Albertina, MG',
  'Ibitiúra de Minas, MG',
  'Santa Rita de Caldas, MG',
  'Ipuiúna, MG',
  'Espírito Santo do Pinhal, SP',
  'Santo Antônio do Jardim, SP',
];
export const regioesOcasionais = ['Ouro Fino, MG', 'Mogi Guaçu, SP', 'São João da Boa Vista, SP'];

export const processo = [
  { titulo: 'Contato', texto: 'Você fala com a equipe pelo formulário, WhatsApp ou e-mail e conta o que precisa.' },
  { titulo: 'Avaliação', texto: 'A equipe avalia a necessidade para definir como o serviço será conduzido.' },
  {
    titulo: 'Visita técnica',
    texto:
      'Conforme o serviço, a visita acontece antes do orçamento. Em outros casos, o orçamento vem primeiro e a visita ocorre depois da aprovação.',
  },
  {
    titulo: 'Orçamento em PDF',
    texto: 'A proposta é enviada em PDF e informa o prazo médio para a realização do serviço, de cerca de 30 dias, conforme cada caso.',
  },
  {
    titulo: 'Aprovação e execução',
    texto: 'Com o orçamento aprovado, o serviço é programado e executado. Depois da entrega, o atendimento pós-venda segue à disposição.',
  },
];

export const diferenciais = [
  { titulo: 'Experiência na área', texto: 'Mais de três décadas de trabalho no setor.' },
  { titulo: 'Qualidade dos serviços', texto: 'Qualidade nos serviços executados.' },
  { titulo: 'Atendimento pós-venda', texto: 'Atendimento depois da venda e da entrega do serviço.' },
  { titulo: 'Compromisso com o trabalho', texto: 'Compromisso com o trabalho em cada serviço.' },
  { titulo: 'Velocidade no atendimento', texto: 'Velocidade no atendimento ao cliente.' },
];

export const treinamentos =
  'A equipe possui treinamentos relacionados às Normas Regulamentadoras NR 06, NR 12, NR 34 e NR 35.';

export const faq = [
  {
    p: 'Existe empresa de estruturas metálicas e caldeiraria em Andradas, MG?',
    r: 'Sim. A Toffoli & Antônio fica no Sítio Santo Antônio, em Angola, Andradas (MG), e atua no setor desde 1994, com estruturas metálicas e caldeiraria para indústrias, agronegócio e clientes residenciais do Sul de Minas e do interior de São Paulo.',
  },
  {
    p: 'Quais tipos de estruturas metálicas a empresa executa?',
    r: 'Barracões industriais e para o agronegócio, estruturas para telhados, coberturas com telhas galvanizadas simples ou termoacústicas, soluções com forro e fechamentos laterais com telhas.',
  },
  {
    p: 'Quais serviços de caldeiraria são oferecidos?',
    r: 'Plataformas para manutenção, estruturas para máquinas, coifas, dutos, silos, tanques, caldeiras, chaminés, escadas, corrimãos, bancadas, adaptações industriais e manutenções industriais.',
  },
  {
    p: 'O que é caldeiraria?',
    r: 'É o trabalho de cortar, dobrar, soldar e montar chapas e perfis de aço para fabricar peças e equipamentos sob medida, como tanques, silos, dutos, coifas e chaminés.',
  },
  {
    p: 'Qual a diferença entre telha galvanizada simples e telha termoacústica?',
    r: 'A galvanizada simples é uma chapa única de aço galvanizado. A termoacústica leva uma camada isolante entre as chapas e costuma ser escolhida quando calor e ruído pesam no ambiente. A equipe orienta a escolha conforme o uso do espaço e o orçamento.',
  },
  {
    p: 'A empresa faz serviços de torno e fresa?',
    r: 'Sim. Além de estruturas metálicas e caldeiraria, a Toffoli & Antônio realiza serviços de usinagem em torno e fresa.',
  },
  {
    p: 'Qual é o prazo médio para realizar um serviço?',
    r: 'O orçamento em PDF informa o prazo de cada serviço. A média é de cerca de 30 dias, conforme cada caso.',
  },
  {
    p: 'Que informações ajudam a pedir um orçamento?',
    r: 'O tipo de serviço, o local onde será feito, as medidas aproximadas e fotos do ambiente, se houver. Com isso, a equipe avalia a necessidade e define se a visita técnica acontece antes do orçamento.',
  },
  {
    p: 'A empresa atende projetos industriais e residenciais?',
    r: 'Sim. O trabalho é voltado principalmente a indústrias e ao agronegócio, e também atende demandas residenciais como telhados, portões, grades e pergolados.',
  },
  {
    p: 'A Toffoli & Antônio realiza visitas técnicas?',
    r: 'Sim, conforme o serviço. Em alguns casos a visita acontece antes do orçamento; em outros, o orçamento é preparado primeiro e a visita ocorre depois da aprovação.',
  },
  {
    p: 'Como solicitar um orçamento?',
    r: 'Entre em contato pelo formulário desta página, pelo WhatsApp ou por e-mail. A equipe avalia a necessidade e envia o orçamento em PDF.',
  },
  {
    p: 'A empresa oferece atendimento depois da entrega do serviço?',
    r: 'Sim. O atendimento pós-venda faz parte do trabalho da Toffoli & Antônio, junto com a experiência na área e a qualidade dos serviços.',
  },
  {
    p: 'A equipe possui treinamentos em normas regulamentadoras?',
    r: 'Sim. A equipe possui treinamentos relacionados às Normas Regulamentadoras NR 06, NR 12, NR 34 e NR 35, que muitas empresas exigem de prestadores de serviço.',
  },
  {
    p: 'Quais regiões são atendidas?',
    r: 'Principalmente Andradas, Jacutinga, Albertina, Ibitiúra de Minas, Santa Rita de Caldas e Ipuiúna, em Minas Gerais, e Espírito Santo do Pinhal e Santo Antônio do Jardim, em São Paulo. Com menor frequência, Ouro Fino (MG), Mogi Guaçu e São João da Boa Vista (SP).',
  },
];

export const assuntos = [
  { valor: 'estruturas-metalicas', rotulo: 'Estruturas Metálicas' },
  { valor: 'caldeiraria', rotulo: 'Caldeiraria' },
  { valor: 'telhados-pergolados', rotulo: 'Telhados e Pergolados' },
  { valor: 'portoes-grades', rotulo: 'Portões e Grades' },
  { valor: 'torno-fresa', rotulo: 'Torno e Fresa' },
  { valor: 'produtos', rotulo: 'Produtos' },
  { valor: 'trabalhe-conosco', rotulo: 'Trabalhe Conosco' },
  { valor: 'parceiro-fornecedor', rotulo: 'Seja um Parceiro / Fornecedor' },
  { valor: 'outros', rotulo: 'Outros assuntos' },
] as const;

// Seções que dependem de material autorizado. Vazio = a seção e o item de menu não aparecem.
export const produtos: { nome: string; descricao: string; imagem: string }[] = [];
export const projetos: { titulo: string; descricao: string; imagem: string }[] = [];

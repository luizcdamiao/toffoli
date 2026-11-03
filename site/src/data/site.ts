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
    // CEP do briefing. O site antigo usava 37842-899: confirmar com o cliente.
    cep: '37795-000',
  },
} as const;

export const whatsappUrl = `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(empresa.whatsappMensagem)}`;

export const estruturas = [
  'Barracões industriais',
  'Barracões para o agronegócio',
  'Estruturas para telhados',
  'Coberturas com telhas galvanizadas simples',
  'Coberturas com telhas termoacústicas',
  'Soluções com forro',
  'Fechamentos laterais de estruturas com telhas',
];

export const caldeiraria = [
  'Plataformas para manutenção',
  'Estruturas para máquinas',
  'Coifas',
  'Dutos',
  'Silos',
  'Tanques',
  'Caldeiras',
  'Chaminés',
  'Escadas e corrimãos',
  'Bancadas',
  'Adaptações industriais',
  'Manutenções industriais',
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
  { titulo: 'Indústria', texto: 'Cerâmica, injeção plástica e empresas de componentes elétricos e plásticos.' },
  { titulo: 'Agronegócio', texto: 'Barracões, coberturas e estruturas para propriedades rurais.' },
  { titulo: 'Residencial', texto: 'Telhados, portões, grades e pergolados.' },
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
  { titulo: 'Contato', texto: 'Você fala com a equipe pelo formulário, WhatsApp ou e-mail.' },
  { titulo: 'Avaliação', texto: 'Entendemos a necessidade e o que precisa ser feito.' },
  {
    titulo: 'Visita técnica',
    texto:
      'Conforme o serviço, a visita acontece antes do orçamento. Em outros casos, o orçamento vem primeiro e a visita ocorre depois da aprovação.',
  },
  {
    titulo: 'Orçamento em PDF',
    texto: 'A proposta é enviada em PDF e informa o prazo médio para a realização do serviço, de cerca de 30 dias, conforme cada caso.',
  },
  { titulo: 'Aprovação e execução', texto: 'Aprovado o orçamento, o serviço é programado e executado.' },
];

export const diferenciais = [
  { titulo: 'Experiência na área', texto: 'Atuação no setor desde 1994.' },
  { titulo: 'Qualidade dos serviços', texto: 'Qualidade nos serviços executados.' },
  { titulo: 'Atendimento pós-venda', texto: 'Atendimento depois da venda e da entrega do serviço.' },
  { titulo: 'Compromisso com o trabalho', texto: 'Compromisso com o trabalho em cada serviço.' },
  { titulo: 'Velocidade no atendimento', texto: 'Velocidade no atendimento ao cliente.' },
];

export const treinamentos =
  'A equipe possui treinamentos relacionados às Normas Regulamentadoras NR 06, NR 12, NR 34 e NR 35.';

export const faq = [
  {
    p: 'Quais tipos de estruturas metálicas a empresa executa?',
    r: 'Barracões industriais e para o agronegócio, estruturas para telhados, coberturas com telhas galvanizadas simples ou termoacústicas, soluções com forro e fechamentos laterais com telhas.',
  },
  {
    p: 'Quais serviços de caldeiraria são oferecidos?',
    r: 'Plataformas para manutenção, estruturas para máquinas, coifas, dutos, silos, tanques, caldeiras, chaminés, escadas, corrimãos, bancadas, adaptações industriais e manutenções industriais.',
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

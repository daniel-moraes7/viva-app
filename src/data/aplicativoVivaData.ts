// Dados do Quiz
export const quizQuestions = [
  {
    id: 'q1',
    text: 'Qual frase melhor define o que seja violência?',
    options: [
      { text: 'É qualquer agressão física que resulte em lesões corporais', correct: false },
      { text: 'São apenas atos intencionais de força física contra outras pessoas', correct: false },
      { text: 'É o uso intencional de força física ou do poder, real ou em ameaça, contra si próprio, contra outra pessoa, ou contra um grupo ou uma comunidade que resulte ou tenha possibilidade de resultar em lesão, morte, dano psicológico, deficiência de desenvolvimento ou privação', correct: true },
      { text: 'É apenas a violência doméstica praticada no ambiente familiar', correct: false }
    ]
  },
  {
    id: 'q2',
    text: 'Quais são os três grandes grupos de violência segundo a OMS?',
    options: [
      { text: 'Violência urbana, violência rural e violência virtual', correct: false },
      { text: 'Violência autoprovocada, violência doméstica/intrafamiliar e violência comunitária/extrafamiliar', correct: true },
      { text: 'Violência física, violência psicológica e violência sexual', correct: false },
      { text: 'Violência contra crianças, violência contra mulheres e violência contra idosos', correct: false }
    ]
  },
  {
    id: 'q3',
    text: 'A violência psicológica inclui:',
    options: [
      { text: 'Apenas agressões verbais diretas', correct: false },
      { text: 'Somente bullying escolar', correct: false },
      { text: 'Apenas assédio moral no trabalho', correct: false },
      { text: 'Rejeição, depreciação, discriminação, desrespeito, cobrança exagerada, punições humilhantes, bullying e assédio moral', correct: true }
    ]
  },
  {
    id: 'q4',
    text: 'Sobre a notificação de violência, é correto afirmar que:',
    options: [
      { text: 'É obrigatória apenas para profissionais de saúde médicos', correct: false },
      { text: 'Deve ser feita apenas quando há certeza absoluta da violência', correct: false },
      { text: 'É obrigatória para todos os profissionais de saúde em casos de suspeita ou confirmação de violência', correct: true },
      { text: 'É opcional e depende do consentimento da vítima', correct: false }
    ]
  }
];

// Dados dos casos de estudo
export const caseStudies = [
  {
    id: 'caso1',
    title: 'Caso 1',
    relato: 'Homem, 45 anos, procurou o serviço de saúde após acidente de trânsito. Durante a consulta, relatou que estava voltando de uma festa onde consumiu bebida alcoólica. Apresentava escoriações e hematomas compatíveis com acidente automobilístico.',
    objetivo: 'Exemplificar um relato que não seja considerado violência para fins de notificação, pois se trata de acidente sem intenção de causar dano.',
    hasImage: false
  },
  {
    id: 'caso2',
    title: 'Caso 2',
    relato: 'Mulher, 28 anos, procurou atendimento médico apresentando hematomas no rosto e braços. Relatou que foi agredida pelo companheiro após discussão doméstica. Informou que é a primeira vez que procura ajuda, mas as agressões acontecem há mais de um ano.',
    objetivo: 'Exemplificar um caso de violência doméstica/intrafamiliar que deve ser notificado compulsoriamente.',
    hasImage: true,
    imageUrl: '/img/fch_caso2.png',
    imageAlt: 'Ficha de notificação preenchida para o Caso 2'
  },
  {
    id: 'caso3',
    title: 'Caso 3',
    relato: 'Adolescente de 15 anos foi trazida pela mãe ao posto de saúde. Durante a consulta, a mãe saiu da sala e a adolescente relatou ter sido abusada sexualmente pelo padrasto. Apresentava sinais físicos compatíveis com abuso sexual.',
    objetivo: 'Exemplificar um caso de violência sexual contra criança/adolescente que deve ser notificado imediatamente.',
    hasImage: true,
    imageUrl: '/img/fch_caso3.png',
    imageAlt: 'Ficha de notificação preenchida para o Caso 3'
  },
  {
    id: 'caso4',
    title: 'Caso 4',
    relato: 'Idoso de 78 anos foi trazido por cuidador ao serviço de saúde. Apresentava desnutrição, higiene inadequada e lesões por pressão. O cuidador relatou dificuldades financeiras da família para cuidar do idoso.',
    objetivo: 'Exemplificar um caso de negligência/abandono contra pessoa idosa.',
    hasImage: true,
    imageUrl: '/img/fch_caso6.png',
    imageAlt: 'Ficha de notificação preenchida para o Caso 4'
  },
  {
    id: 'caso5',
    title: 'Caso 5',
    relato: 'Jovem de 19 anos deu entrada no hospital após tentativa de suicídio por ingestão de medicamentos. Relatou histórico de depressão e ideação suicida recorrente.',
    objetivo: 'Exemplificar um caso de violência autoprovocada (tentativa de suicídio) que deve ser notificado.',
    hasImage: true,
    imageUrl: '/img/fch_caso9.png',
    imageAlt: 'Ficha de notificação preenchida para o Caso 5'
  }
];

// Dados de conceitos sobre violência
export const conceitosData = {
  oQueEViolencia: {
    title: 'O que é violência?',
    definicao: 'Para a área da saúde e para fins de notificação, considera-se como violência "o uso intencional de força física ou do poder, real ou em ameaça, contra si próprio, contra outra pessoa, ou contra um grupo ou uma comunidade que resulte ou tenha possibilidade de resultar em lesão, morte, dano psicológico, deficiência de desenvolvimento ou privação" (KRUG, 2002).',
    politicaNacional: 'A Política Nacional de Redução da Morbimortalidade por Acidentes e Violências define violência como as ações humanas que afetam a integridade e a saúde física, moral, mental ou espiritual.',
    linkMais: 'https://bvsms.saude.gov.br/bvs/publicacoes/politica_reducao_morbimortalidade_acidentes_2ed.pdf'
  },
  tiposViolencia: {
    title: 'Tipos de violência',
    introducao: 'A Organização Mundial da Saúde (OMS) estabelece uma tipologia de três grandes grupos, segundo quem comete o ato violento:',
    tipos: [
      {
        nome: 'Violência autoprovocada/autoinfligida',
        icone: 'fas fa-user-injured',
        descricao: 'Compreende ideação suicida, autoagressões, tentativas de suicídio e suicídios. A ideação suicida não é objeto de notificação no Viva, mas requer ações de atenção integral em saúde.'
      },
      {
        nome: 'Violência doméstica/intrafamiliar',
        icone: 'fas fa-house-crack',
        descricao: 'É a que ocorre entre os parceiros íntimos e entre os membros da família (no ambiente da casa ou não). Esse tipo de violência não se refere apenas ao espaço físico onde ocorre, mas também às relações em que se constrói e efetua.'
      },
      {
        nome: 'Violência comunitária/extrafamiliar',
        icone: 'fas fa-people-group',
        descricao: 'É aquela que ocorre no ambiente social em geral, entre conhecidos ou desconhecidos. É praticada por meio de agressão às pessoas, por atentado à sua integridade e vida e/ou a seus bens.'
      }
    ]
  },
  naturezaViolencia: {
    title: 'Natureza da violência',
    introducao: 'A OMS estabelece, também, distinções sobre as naturezas da violência, destacando-se: física, sexual, psicológica/moral e negligência/abandono.',
    ministerio: 'O Ministério da Saúde incorporou outras naturezas de violências: tortura; violência financeira/econômica; tráfico de seres humanos; trabalho escravo; trabalho infantil; intervenção legal.',
    linkMais: 'https://bvsms.saude.gov.br/bvs/publicacoes/viva_instrutivo_violencia_interpessoal_autoprovocada_2ed.pdf'
  }
};

// Dados sobre violência interpessoal
export const interpessoalData = {
  criancasAdolescentes: {
    title: 'Crianças e adolescentes',
    descricao: 'A violência contra crianças e adolescentes pode ocorrer em diferentes contextos e manifestar-se de diversas formas. É fundamental reconhecer os sinais e garantir a proteção integral.',
    formas: ['Violência física', 'Violência sexual', 'Violência psicológica', 'Negligência e abandono', 'Trabalho infantil']
  },
  mulheres: {
    title: 'Mulheres',
    descricao: 'A violência contra a mulher é um problema de saúde pública que afeta mulheres de todas as idades, classes sociais, etnias e níveis de escolaridade.',
    leiMariaPenha: 'Define violência doméstica e familiar contra a mulher como qualquer ação ou omissão baseada no gênero que cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial.'
  },
  idosos: {
    title: 'Pessoa idosa',
    descricao: 'A violência contra a pessoa idosa pode ser praticada por familiares, cuidadores, instituições ou desconhecidos, sendo a negligência uma das formas mais comuns.',
    estatutoIdoso: 'Garante direitos fundamentais à pessoa idosa e estabelece medidas de proteção contra violência, negligência, discriminação e outras violações.'
  }
};

// Dados sobre violência autoprovocada
export const autoprovocadaData = {
  ideacaoSuicida: {
    title: 'Ideação suicida',
    descricao: 'A ideação suicida refere-se a pensamentos sobre suicídio, que podem variar desde considerações passageiras até planos detalhados.',
    observacao: 'A ideação suicida não é objeto de notificação no VIVA, mas requer ações de atenção integral em saúde mental.'
  },
  autoagressao: {
    title: 'Autoagressões',
    descricao: 'São comportamentos intencionais de causar dano a si mesmo, sem intenção suicida. Podem incluir cortes, queimaduras, socos contra objetos, entre outros.',
    atencao: 'Mesmo sem intenção suicida, as autoagressões requerem avaliação e acompanhamento adequados.'
  },
  tentativaSuicidio: {
    title: 'Tentativas de suicídio',
    descricao: 'São comportamentos autoinfligidos com evidência de que a pessoa tinha intenção de morrer, mas que não resultaram em morte.',
    notificacao: 'Todos os casos de tentativa de suicídio devem ser notificados no VIVA.'
  },
  suicidio: {
    title: 'Suicídio',
    descricao: 'É a morte causada por comportamento autoinfligido com evidência de que a pessoa tinha intenção de morrer.',
    observacao: 'O suicídio consumado é registrado no SIM (Sistema de Informações sobre Mortalidade).'
  }
};

// Links de download e referências
export const downloadLinks = [
  {
    id: 'instrutivo-viva',
    title: 'Instrutivo VIVA',
    url: 'https://bvsms.saude.gov.br/bvs/publicacoes/viva_instrutivo_violencia_interpessoal_autoprovocada_2ed.pdf',
    description: 'Instrutivo para preenchimento da ficha de notificação'
  },
  {
    id: 'politica-reducao',
    title: 'Política Nacional',
    url: 'https://bvsms.saude.gov.br/bvs/publicacoes/politica_reducao_morbimortalidade_acidentes_2ed.pdf',
    description: 'Política Nacional de Redução da Morbimortalidade por Acidentes e Violências'
  },
  {
    id: 'lei-maria-penha',
    title: 'Lei Maria da Penha',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm',
    description: 'Lei 11.340/2006 - Lei Maria da Penha'
  }
];

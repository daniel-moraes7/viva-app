import { PageData } from '../types/pageData';

// Dados da página Aplicativo Viva
export const aplicativoVivaData: PageData = {
  seo: {
    title: 'Aplicativo Viva – Cgviva',
    description: 'Conheça o aplicativo Viva, ferramenta para subsidiar o atendimento a vítimas de violência e acidentes.',
    keywords: 'aplicativo, viva, violência, acidentes, atendimento, vítimas'
  },
  links: [
    {
      href: '/downloads/guia_instalacao_pvt.pdf',
      title: 'Guia de Instalação PVT',
      external: true,
      icon: 'fa-file-pdf',
      description: 'Manual completo de instalação do sistema PVT'
    },
    {
      href: '/downloads/pvt_cgviva_docker.zip',
      title: 'Download PVT Docker',
      external: true,
      icon: 'fa-download',
      description: 'Pacote Docker para instalação do PVT'
    }
  ],
  accordionItems: [
    {
      id: 'o-que-e-viva',
      title: 'O que é o Aplicativo Viva?',
      icon: 'fa-mobile-alt',
      content: 'O Aplicativo Viva é uma ferramenta desenvolvida para subsidiar o atendimento a vítimas de violência e acidentes nos serviços de saúde.'
    },
    {
      id: 'como-funciona',
      title: 'Como Funciona?',
      icon: 'fa-cogs',
      content: 'O aplicativo funciona através de formulários estruturados que coletam informações essenciais sobre os casos atendidos.'
    },
    {
      id: 'beneficios',
      title: 'Benefícios',
      icon: 'fa-star',
      content: 'O uso do Aplicativo Viva traz diversos benefícios para os profissionais de saúde como padronização do atendimento e melhoria na qualidade dos dados.'
    }
  ]
};

// Dados da página Vida no Trânsito
export const vidaNoTransitoData: PageData = {
  seo: {
    title: 'Programa Vida no Trânsito – Cgviva',
    description: 'Ações de vigilância e prevenção de lesões e mortes no trânsito através do Programa Vida no Trânsito.',
    keywords: 'vida no trânsito, acidentes, prevenção, vigilância, trânsito'
  },
  links: [
    {
      href: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/acidentes-de-transito',
      title: 'Portal Oficial - Acidentes de Trânsito',
      external: true,
      icon: 'fa-external-link-alt'
    }
  ],
  accordionItems: [
    {
      id: 'programa-pvt',
      title: 'O Programa Vida no Trânsito',
      icon: 'fa-car',
      content: 'O Programa Vida no Trânsito (PVT) é uma iniciativa do Ministério da Saúde em parceria com diversos órgãos para reduzir a morbimortalidade por acidentes de trânsito.'
    },
    {
      id: 'acoes-preventivas',
      title: 'Ações Preventivas',
      icon: 'fa-shield-alt',
      content: 'O programa desenvolve diversas ações de prevenção como campanhas educativas, fiscalização e controle, melhoria da infraestrutura e capacitação de profissionais.'
    }
  ]
};

// Exportação de todos os dados
export const pagesData = {
  'aplicativo-viva': aplicativoVivaData,
  'vida-no-transito': vidaNoTransitoData
} as const;

export type PageKey = keyof typeof pagesData;
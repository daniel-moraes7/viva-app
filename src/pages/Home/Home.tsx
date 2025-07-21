import React, { lazy, Suspense, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/UI/Loading';

// Lazy load do carrossel para melhor performance
const Carousel = lazy(() => import('../../components/UI/Carousel').then(module => ({ default: module.Carousel })));

const Home: React.FC = React.memo(() => {
  // Memoização dos dados para evitar recriação desnecessária
  const carouselItemsData = useMemo(() => [
    {
      imagem: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      titulo: "Aplicativo Viva",
      descricao: "Conheça a ferramenta para subsidiar o atendimento a vítimas de violência.",
      link: "/aplicativo-viva"
    },
    {
      imagem: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop",
      titulo: "Programa Vida no Trânsito",
      descricao: "Ações de vigilância e prevenção de lesões e mortes no trânsito.",
      link: "/vida-no-transito"
    },
    {
      imagem: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
      titulo: "Boletins Epidemiológicos",
      descricao: "Acesse as publicações de caráter técnico-científico da Cgviva.",
      link: "/boletins-epidemiologicos"
    },
    {
      imagem: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop",
      titulo: "Cgviva",
      descricao: "Conheça a Coordenação-Geral de Vigilância de Violências e Acidentes.",
      link: "/cgviva"
    }
  ], []);

  // Dados dos cards de navegação organizados para melhor manutenção
  const navigationCards = useMemo(() => [
  {
    id: 'cgviva',
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Cgviva',
    description: 'Coordenação-Geral de Vigilância de Violências e Acidentes.',
    link: '/cgviva',
    ariaLabel: 'Acessar página da Cgviva'
  },
  {
    id: 'aplicativo-viva',
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Aplicativo Viva',
    description: 'Aplicativo para subsidiar o atendimento a vítimas de violência.',
    link: '/aplicativo-viva',
    ariaLabel: 'Acessar página do Aplicativo Viva'
  },
  {
    id: 'vida-transito',
    icon: 'fa-solid fa-car-side',
    title: 'Programa Vida no Trânsito',
    description: 'Vigilância e prevenção de lesões e mortes no trânsito.',
    link: '/vida-no-transito',
    ariaLabel: 'Acessar página do Programa Vida no Trânsito'
  },
  {
    id: 'inqueritos',
    icon: 'fa-solid fa-clipboard-question',
    title: 'Inquéritos',
    description: 'Vigilância para Doenças Crônicas por Inquéritos.',
    link: '/inqueritos',
    ariaLabel: 'Acessar página de Inquéritos'
  },
  {
    id: 'painel-tecnico',
    icon: 'fa-solid fa-chart-simple',
    title: 'Painel Técnico',
    description: 'Dashboard de Violência Interpessoal/Autoprovocada.',
    link: 'https://www.gov.br/saude/pt-br/composicao/svsa/cnie/painel-violencia-interpessoal-autoprovocada',
    external: true,
    ariaLabel: 'Acessar Painel Técnico (abre em nova aba)'
  },
  {
    id: 'transferencia-arquivos',
    icon: 'fa-solid fa-database',
    title: 'Transferência de Arquivos',
    description: 'Base de dados e arquivos de tabulação de violência.',
    link: 'https://datasus.saude.gov.br/transferencia-de-arquivos/',
    external: true,
    ariaLabel: 'Acessar Transferência de Arquivos (abre em nova aba)'
  },
  {
    id: 'boletins',
    icon: 'fa-solid fa-file-text',
    title: 'Boletins Epidemiológicos',
    description: 'Publicação de caráter técnico-científico da Cgviva.',
    link: '/boletins-epidemiologicos',
    ariaLabel: 'Acessar página de Boletins Epidemiológicos'
  },
  {
    id: 'infograficos',
    icon: 'fa-solid fa-sitemap',
    title: 'Infográficos',
    description: 'Informações para lidar com questões relacionadas à violência.',
    link: '/infograficos',
    ariaLabel: 'Acessar página de Infográficos'
  }
  ], []);

  return (
    <div className="home-page">
      {/* Hero Section with Carousel */}
      <section className="hero-section" aria-label="Principais recursos">
        <div className="px-2">
          <Suspense fallback={<Loading />}>
            <Carousel items={carouselItemsData} />
          </Suspense>
        </div>
      </section>

      {/* Main Navigation Cards */}
      <section className="main-navigation" aria-label="Navegação principal">
        <div className="container">
          <div className="navigation-grid">
            {navigationCards.map((card, index) => (
              <div key={card.id} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <article className="navigation-card">
                  <div className="card-icon" aria-hidden="true">
                    <i className={card.icon}></i>
                  </div>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                  <div className="card-action">
                    {card.external ? (
                      <a
                        href={card.link}
                        className="btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={card.ariaLabel}
                      >
                        Acessar
                        <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                      </a>
                    ) : (
                      <Link
                        to={card.link}
                        className="btn-primary"
                        aria-label={card.ariaLabel}
                      >
                        Acessar
                      </Link>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;

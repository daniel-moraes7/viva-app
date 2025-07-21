import React from 'react'
import { SafeBackButton } from '../../components/UI/BackButton'
import { SEO } from '../../components/SEO/SEO'
import SimpleAccordion from '../../components/UI/SimpleAccordion'
import SectionNav from '../../components/UI/SectionNav'

const sectionList = [
  { id: 'viva-inquerito', label: 'VIVA Inquérito' },
  { id: 'vigitel', label: 'VIGITEL' },
  { id: 'pns', label: 'PNS' },
  { id: 'mais-inqueritos', label: 'Mais Inquéritos' },
];

const Inqueritos: React.FC = () => {
  const inqueritoAccordionItems = [
    {
      id: 'viva-inquerito-item',
      title: 'VIVA Inquérito',
      icon: 'fas fa-search',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 mb-6">
            O Inquérito de Violências e Acidentes em Serviços Sentinela de Urgência e Emergência (VIVA Inquérito) 
            é o componente de vigilância sentinela do Sistema de Vigilância de Violências e Acidentes (VIVA).
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Objetivos</h4>
            <ul className="space-y-1 text-blue-700">
              <li>• Descrever o perfil das vítimas de violências e acidentes atendidas em unidades de urgência</li>
              <li>• Identificar fatores de risco e de proteção associados à ocorrência de violências e acidentes</li>
              <li>• Propor medidas específicas de vigilância e prevenção</li>
              <li>• Promover saúde e cultura da paz</li>
            </ul>
          </div>
          
          <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <strong className="text-yellow-800">Atualmente:</strong> 
            <span className="text-yellow-700"> A pesquisa está em sua sexta edição.</span>
          </p>
          
          <a 
            href="https://www.gov.br/saude/pt-br/composicao/svsa/inqueritos-de-saude/viva-inquerito" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            Saber mais
          </a>
        </div>
      )
    },
    {
      id: 'vigitel-item',
      title: 'VIGITEL',
      icon: 'fas fa-phone',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 mb-6">
            A Vigilância de Fatores de Risco e Proteção para Doenças Crônicas por Inquérito Telefônico (VIGITEL) 
            é um sistema de monitoramento de fatores de risco para doenças crônicas não transmissíveis.
          </p>
          
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-green-800 mb-2">Características</h4>
            <ul className="space-y-1 text-green-700">
              <li>• Entrevistas telefônicas com população adulta (≥18 anos)</li>
              <li>• Amostra de 27 capitais brasileiras e Distrito Federal</li>
              <li>• Monitoramento contínuo desde 2006</li>
              <li>• Dados representativos da população adulta</li>
              <li>• Mais de 800 mil adultos entrevistados em 17 edições</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="https://www.gov.br/saude/pt-br/composicao/svsa/inqueritos-de-saude/vigitel" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              Saber mais
            </a>
            <a 
              href="https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigitel" 
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-pdf mr-2"></i>
              Publicações
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'pns-item',
      title: 'PNS - Pesquisa Nacional de Saúde',
      icon: 'fas fa-chart-bar',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 mb-6">
            A Pesquisa Nacional de Saúde (PNS) é uma parceria entre o Ministério da Saúde e o Instituto Brasileiro 
            de Geografia e Estatística (IBGE), realizada a cada cinco anos.
          </p>
          
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-purple-800 mb-2">Características</h4>
            <ul className="space-y-1 text-purple-700">
              <li>• Cobertura nacional (urbana e rural)</li>
              <li>• Informações sobre população brasileira</li>
              <li>• Fatores de risco e proteção para saúde</li>
              <li>• Acesso e uso dos serviços de saúde</li>
              <li>• Padrão ouro dos inquéritos brasileiros</li>
            </ul>
          </div>
          
          <p className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
            <strong className="text-indigo-800">Destaque:</strong> 
            <span className="text-indigo-700"> É a maior, mais completa e abrangente pesquisa de saúde do país.</span>
          </p>
          
          <a 
            href="https://www.gov.br/saude/pt-br/composicao/svsa/inqueritos-de-saude/pns" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            Portal PNS
          </a>
        </div>
      )
    }
  ];

  return (
    <>
      <SEO 
        title="Inquéritos - Vigilância para Doenças Crônicas" 
        description="Conheça os inquéritos de saúde para vigilância de doenças crônicas: VIVA Inquérito, VIGITEL e PNS. Dados epidemiológicos e fatores de risco."
        keywords="inquéritos, VIGITEL, PNS, VIVA inquérito, vigilância, doenças crônicas, epidemiologia"
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SafeBackButton />
          
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Navegação lateral */}
            <aside className="hidden lg:block">
              <SectionNav items={sectionList} />
            </aside>

            {/* Conteúdo principal */}
            <div className="lg:col-span-3">
              <div className="space-y-12">
                {/* Introdução */}
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Sobre os Inquéritos
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Os inquéritos de saúde são instrumentos fundamentais para a vigilância epidemiológica, 
                    permitindo o monitoramento contínuo de fatores de risco e proteção para doenças crônicas não transmissíveis.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <p className="text-blue-800">
                      <i className="fas fa-info-circle mr-2"></i>
                      <strong>Importância:</strong> Fornecem dados essenciais para o planejamento de políticas públicas de saúde.
                    </p>
                  </div>
                </div>

                {/* Seção Inquéritos */}
                <section id="viva-inquerito" className="scroll-mt-24">
                  <SimpleAccordion
                    id="acc-inqueritos"
                    items={inqueritoAccordionItems}
                  />
                </section>

                {/* Mais Inquéritos */}
                <section id="mais-inqueritos" className="scroll-mt-24">
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Outros Inquéritos</h2>
                    
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          <i className="fas fa-graduation-cap text-blue-600 mr-2"></i>
                          PeNSE
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Pesquisa Nacional de Saúde do Escolar - monitoramento de fatores de risco e proteção à saúde dos adolescentes.
                        </p>
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-r-lg mb-4">
                          <p className="text-orange-700 text-sm">
                            <strong>Edições:</strong> 2009, 2012, 2015, 2019 e 2024
                          </p>
                        </div>
                        <a 
                          href="https://www.gov.br/saude/pt-br/composicao/svsa/inqueritos-de-saude/pense" 
                          className="inline-flex items-center text-blue-600 hover:text-blue-700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Saiba mais <i className="fas fa-arrow-right ml-1"></i>
                        </a>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          <i className="fas fa-heartbeat text-red-600 mr-2"></i>
                          ELSI-Brasil
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Estudo Longitudinal de Saúde dos Idosos Brasileiros - acompanha a saúde e bem-estar da população idosa.
                        </p>
                        <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg mb-4">
                          <p className="text-green-700 text-sm">
                            <strong>Foco:</strong> População com 50 anos ou mais
                          </p>
                        </div>
                        <a 
                          href="http://elsi.cpqrr.fiocruz.br/" 
                          className="inline-flex items-center text-blue-600 hover:text-blue-700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Saiba mais <i className="fas fa-arrow-right ml-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Botão voltar ao topo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
          aria-label="Voltar ao topo"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
}

export default Inqueritos;

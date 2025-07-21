import React from 'react'
import { SafeBackButton } from '../../components/UI/BackButton'
import Header from '../../components/Layout/Header'
import { SEO } from '../../components/SEO/SEO'
import SimpleAccordion from '../../components/UI/SimpleAccordion'
import SectionNav from '../../components/UI/SectionNav'

const sectionList = [
  { id: 'programa-pvt', label: 'O Programa' },
  { id: 'guia-pvt', label: 'Guia PVT' },
  { id: 'plataforma-pvt', label: 'Plataforma Digital' },
  { id: 'recursos', label: 'Recursos' },
];

const VidaNoTransito: React.FC = () => {
  const accordionItems = [
    {
      id: 'programa-pvt-item',
      title: 'O Programa Vida no Trânsito',
      icon: 'fas fa-road',
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Desenvolvido pelo Ministério da Saúde, o PVT consiste em uma estratégia de 
            governança e gestão intersetorial, desenvolvido em parceria com estados e 
            municípios, em conjunto com atores do sistema de trânsito, transporte, 
            segurança, infraestrutura, planejamento urbano, educação, organizações não 
            governamentais, sociedades científicas e controle social.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Objetivo Principal</h4>
            <p className="text-blue-700">
              Reduzir mortes e lesões decorrentes de acidentes de trânsito através de uma abordagem intersetorial e integrada.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-green-800 mb-2">Parceiros Estratégicos</h4>
            <ul className="space-y-1 text-green-700">
              <li>• Ministério da Saúde</li>
              <li>• Estados e Municípios</li>
              <li>• Sistema de trânsito e transporte</li>
              <li>• Órgãos de segurança</li>
              <li>• Organizações não governamentais</li>
              <li>• Sociedades científicas</li>
            </ul>
          </div>
          
          <a 
            href="https://www.gov.br/saude/pt-br/composicao/svsa/vigilancia-de-doencas-cronicas-nao-transmissiveis/vigilancia-dos-acidentes-e-violencias/pvt#:~:text=O%20PVT%20consiste%20em%20uma,sociedades%20cient%C3%ADficas%20e%20controle%20social" 
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
      id: 'guia-pvt-item',
      title: 'Guia do Programa Vida no Trânsito',
      icon: 'fas fa-book',
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            O Guia Vida no Trânsito (PVT) é um material instrucional direcionado para os profissionais 
            dos setores de saúde, trânsito, segurança, educação, engenharia e outros, que dedicam, de 
            forma integral ou parcial, o seu tempo de trabalho para a implantação e execução das ações 
            do PVT nos estados e municípios brasileiros.
          </p>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-amber-800 mb-2">Público-Alvo</h4>
            <ul className="space-y-1 text-amber-700">
              <li>• Profissionais da saúde</li>
              <li>• Especialistas em trânsito</li>
              <li>• Agentes de segurança</li>
              <li>• Educadores</li>
              <li>• Engenheiros</li>
              <li>• Gestores públicos</li>
            </ul>
          </div>
          
          <a 
            href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_vida_transito_2017.pdf" 
            className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-file-pdf mr-2"></i>
            Guia Vida no Trânsito - 2017
          </a>
        </div>
      )
    },
    {
      id: 'plataforma-pvt-item',
      title: 'Plataforma Digital do PVT',
      icon: 'fas fa-laptop',
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Para qualificação desses dados, foi desenvolvida uma Plataforma digital com o 
            objetivo de fortalecer o processo de análise para os profissionais que desenvolvem 
            ações de vigilância de lesões no trânsito bem como a execução das ações do PVT.
          </p>
          
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-purple-800 mb-2">Funcionalidades</h4>
            <ul className="space-y-1 text-purple-700">
              <li>• Cadastramento de informações do PVT municipal</li>
              <li>• Relacionamento entre bancos de dados</li>
              <li>• Monitoramento de resultados</li>
              <li>• Análise de dados de vítimas</li>
              <li>• Relatórios de acompanhamento</li>
            </ul>
          </div>

          <p className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
            <strong className="text-indigo-800">Status:</strong> 
            <span className="text-indigo-700"> Plataforma disponível para estados e municípios com o programa implantado.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="/downloads/guia_instalacao_pvt.pdf" 
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-pdf mr-2"></i>
              Guia de Instalação
            </a>
            <a 
              href="/downloads/pvt_cgviva_docker.zip" 
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download mr-2"></i>
              Scripts de Instalação
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <SEO 
        title="Programa Vida no Trânsito - PVT" 
        description="Conheça o Programa Vida no Trânsito (PVT), estratégia intersetorial para redução de mortes e lesões decorrentes de acidentes de trânsito."
        keywords="vida no trânsito, PVT, acidentes de trânsito, vigilância, prevenção, Ministério da Saúde"
      />
      <Header />

      <main className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <SafeBackButton />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Programa Vida no Trânsito
              </h1>
              <p className="text-lg text-gray-600 mt-2">Estratégia Intersetorial para Prevenção de Acidentes</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                    Sobre o PVT
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    O Programa Vida no Trânsito é uma iniciativa do Ministério da Saúde que visa reduzir 
                    a morbimortalidade por acidentes de trânsito através de uma abordagem integrada e multissetorial.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                    <p className="text-red-800">
                      <i className="fas fa-exclamation-triangle mr-2"></i>
                      <strong>Urgência:</strong> Os acidentes de trânsito são uma das principais causas de morte 
                      e lesões no Brasil, especialmente entre jovens.
                    </p>
                  </div>
                </div>

                {/* Seção Acordeão */}
                <section id="programa-pvt" className="scroll-mt-24">
                  <SimpleAccordion
                    id="acc-vida-transito"
                    items={accordionItems}
                  />
                </section>

                {/* Recursos Adicionais */}
                <section id="recursos" className="scroll-mt-24">
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Recursos e Estatísticas</h2>
                    
                    <div className="grid gap-6 md:grid-cols-3 mb-8">
                      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 text-center">
                        <i className="fas fa-car-crash text-red-600 text-3xl mb-3"></i>
                        <h3 className="font-semibold text-red-800 mb-2">Impacto</h3>
                        <p className="text-red-700 text-sm">
                          Acidentes de trânsito são a principal causa de morte violenta no Brasil
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                        <i className="fas fa-users text-blue-600 text-3xl mb-3"></i>
                        <h3 className="font-semibold text-blue-800 mb-2">Foco</h3>
                        <p className="text-blue-700 text-sm">
                          Jovens de 15 a 29 anos são os mais afetados pelos acidentes
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
                        <i className="fas fa-target text-green-600 text-3xl mb-3"></i>
                        <h3 className="font-semibold text-green-800 mb-2">Meta</h3>
                        <p className="text-green-700 text-sm">
                          Redução de 50% das mortes no trânsito até 2030 (ONU)
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                      <h3 className="font-semibold text-yellow-800 mb-3">
                        <i className="fas fa-lightbulb mr-2"></i>
                        Pilares de Ação do PVT
                      </h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <ul className="space-y-2 text-yellow-700">
                          <li>• Vigilância epidemiológica</li>
                          <li>• Educação para o trânsito</li>
                          <li>• Fiscalização e aplicação da lei</li>
                        </ul>
                        <ul className="space-y-2 text-yellow-700">
                          <li>• Engenharia de tráfego</li>
                          <li>• Atendimento pré-hospitalar</li>
                          <li>• Atenção às vítimas</li>
                        </ul>
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
      </main>
    </>
  );
}

export default VidaNoTransito;

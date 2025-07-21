import React from 'react'
import { SafeBackButton } from '../../components/UI/BackButton'
import { SEO } from '../../components/SEO/SEO'
import { PdfButton } from '../../components/UI/LinkButton'

const BoletinsEpidemiologicos: React.FC = () => {
  const boletins = [
    {
      id: 'suicidios-2024',
      title: 'Panorama dos suicídios e lesões autoprovocadas no Brasil de 2010 a 2021',
      year: '2024',
      volume: '55',
      numero: '04',
      description: 'Análise epidemiológica dos casos de suicídios e lesões autoprovocadas registrados no Brasil.',
      url: 'https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/boletins/epidemiologicos/edicoes/2024/boletim-epidemiologico-volume-55-no-04.pdf/@@download/file',
      tags: ['Suicídio', 'Lesões autoprovocadas', 'Epidemiologia']
    },
    {
      id: 'violencia-sexual-2023',
      title: 'Notificações de violência sexual contra crianças e adolescentes no Brasil, 2015 a 2021',
      year: '2023',
      volume: '54',
      numero: '08',
      description: 'Panorama das notificações de violência sexual contra crianças e adolescentes registradas no SINAN.',
      url: 'https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/boletins/epidemiologicos/edicoes/2023/boletim-epidemiologico-volume-54-no-08/@@download/file',
      tags: ['Violência sexual', 'Crianças', 'Adolescentes', 'SINAN']
    },
    {
      id: 'motociclistas-2023',
      title: 'Cenário brasileiro das lesões de motociclistas no trânsito de 2011 a 2021',
      year: '2023',
      volume: '54',
      numero: '06',
      description: 'Análise das lesões de motociclistas no trânsito brasileiro com dados de morbidade e mortalidade.',
      url: 'https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/boletins/epidemiologicos/edicoes/2023/boletim-epidemiologico-volume-54-no-06/@@download/file',
      tags: ['Trânsito', 'Motociclistas', 'Acidentes', 'Morbidade']
    }
  ];

  return (
    <>
      <SEO 
        title="Boletins Epidemiológicos - CGVIVA" 
        description="Acesse os boletins epidemiológicos sobre violências e acidentes publicados pela CGVIVA. Dados técnico-científicos sobre vigilância epidemiológica."
        keywords="boletins epidemiológicos, violência, acidentes, epidemiologia, CGVIVA, saúde pública"
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SafeBackButton />
          
          {/* Introdução */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Sobre os Boletins
              </h2>
              <p className="text-gray-600 mb-6">
                O Boletim Epidemiológico, editado pela área técnica da Coordenação-Geral de Vigilância e Prevenção de Violências e Acidentes e Promoção da Cultura de Paz - CGVIVA, 
                é uma publicação de caráter técnico-científico, acesso livre, formato eletrônico para os casos de monitoramento e investigação de violência e acidentes.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <p className="text-blue-800">
                  <i className="fas fa-info-circle mr-2"></i>
                  <strong>Objetivo:</strong> Divulgar dados epidemiológicos relevantes sobre violências e acidentes para subsidiar ações de prevenção e controle.
                </p>
              </div>
            </div>
          </div>

          {/* Lista de Boletins */}
          <div className="grid gap-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Publicações Disponíveis
            </h2>
            
            {boletins.map((boletim) => (
              <article key={boletim.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Volume {boletim.volume} - Nº {boletim.numero}
                        </span>
                        <span className="text-gray-500 text-sm">{boletim.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {boletim.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {boletim.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {boletim.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:ml-6 lg:flex-shrink-0">
                      <PdfButton 
                        href={boletim.url}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        <i className="fas fa-file-pdf mr-2"></i>
                        Baixar PDF
                      </PdfButton>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Link para mais publicações */}
          <div className="mt-12 text-center bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Mais Publicações
            </h3>
            <p className="text-gray-600 mb-6">
              Acesse o portal do Ministério da Saúde para ver todas as edições dos boletins epidemiológicos.
            </p>
            <a 
              href="https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/boletins/epidemiologicos" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              Ver Todas as Publicações
            </a>
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
  )
}

export default BoletinsEpidemiologicos

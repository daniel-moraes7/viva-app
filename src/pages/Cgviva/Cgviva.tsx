import React, { useState } from 'react'
import { SafeBackButton } from '../../components/UI/BackButton'
import SimpleAccordion from '../../components/UI/SimpleAccordion'
import Modal from '../../components/UI/Modal'
import { SEO } from '../../components/SEO/SEO'
import SectionNav from '../../components/UI/SectionNav'

const sectionList = [
  { id: 'sobre', label: 'Sobre a Cgviva' },
  { id: 'funcoes', label: 'Principais funções' },
  { id: 'organizacao', label: 'Organização' },
  { id: 'sistemas', label: 'Sistemas' },
  { id: 'apresentacao', label: 'Apresentação' },
];

const Cgviva: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Accordion items para SimpleAccordion
  const sobreAccordionItems = [
    {
      id: 'sobre-cgviva',
      title: 'Sobre a Cgviva',
      icon: 'fas fa-info-circle',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 mb-6">
            Reconhecendo que as violências e os acidentes exercem grande impacto social e econômico, sobretudo no setor de saúde, 
            o Ministério da Saúde implantou o Sistema de Vigilância de Violências e Acidentes (VIVA).
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Sistema VIVA</h4>
            <p className="mb-2 text-blue-700">O sistema é constituído por dois componentes principais:</p>
            <ul className="space-y-1 text-blue-700">
              <li>• Vigilância de violência interpessoal e autoprovocada (VIVA/Sinan)</li>
              <li>• Vigilância de violências e acidentes em unidades de urgência e emergência (VIVA Inquérito)</li>
            </ul>
          </div>

          <p>
            Implantado por meio da Portaria MS/GM nº 1.356, de 23 de junho de 2006, o sistema VIVA representa um marco importante 
            na vigilância epidemiológica de eventos de causa externa no Brasil.
          </p>
          
          <a 
            href="https://www.gov.br/saude/pt-br/composicao/svsa/vigilancia-de-doencas-cronicas-nao-transmissiveis/vigilancia-dos-acidentes-e-violencias" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            Saber mais sobre VIVA
          </a>
          
          <h4 className="text-2xl font-semibold mt-6 mb-3 text-gray-900">Sobre a CGVIVA</h4>
          <p className="text-gray-600 mb-6">
            A Coordenação-Geral de Vigilância e Prevenção de Violências e Acidentes e Promoção da Cultura da Paz (CGVIVA) 
            é uma área técnica do Ministério da Saúde do Brasil, vinculada ao Departamento de Análise Epidemiológica e 
            Vigilância de Doenças Não Transmissíveis (DAENT), dentro da Secretaria de Vigilância em Saúde e Ambiente (SVSA).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-blue-600 mb-2">
                <i className="fas fa-eye mr-2"></i>
                Vigilância
              </h5>
              <p className="text-gray-700 text-sm">
                Coordena a vigilância epidemiológica de violências e acidentes em todo território nacional.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-blue-600 mb-2">
                <i className="fas fa-shield-alt mr-2"></i>
                Prevenção
              </h5>
              <p className="text-gray-700 text-sm">
                Desenvolve estratégias e ações para a prevenção de violências e acidentes.
              </p>
            </div>
          </div>
          
          <a 
            href="https://www.gov.br/saudesuplementar/pt-br/composicao/secretaria-de-vigilancia-em-saude-e-ambiente/departamento-de-analise-em-saude-e-vigilancia-de-doencas-nao-transmissiveis/coordenacao-geral-de-vigilancia-e-prevencao-de-violencias-e-acidentes-e-promocao-da-cultura-de-paz" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            Página oficial da CGVIVA
          </a>
        </div>
      )
    },
    {
      id: 'funcoes-cgviva',
      title: 'Principais funções da Cgviva',
      icon: 'fas fa-tasks',
      content: (
        <div className="space-y-4">
          {[
            'Monitorar e analisar os dados de violência (interpessoal, autoprovocada, etc.) e acidentes (de trânsito, domésticos, entre outros) no Brasil.',
            'Apoiar a organização da rede de atenção às vítimas de violência e acidentes, especialmente nas unidades de saúde.',
            'Produzir e divulgar informações técnico-científicas, como boletins epidemiológicos e infográficos sobre o tema.',
            'Capacitar profissionais de saúde para identificação, acolhimento e notificação de casos de violência.',
            'Estimular ações intersetoriais com educação, assistência social, segurança pública, entre outros, para prevenção das violências.',
            'Promover iniciativas ligadas à Cultura da Paz, incentivando ambientes mais seguros, respeitosos e solidários.'
          ].map((funcao, index) => (
            <div key={index} className="flex items-start">
              <i className="fas fa-check text-green-600 mr-3 mt-1 flex-shrink-0"></i>
              <span className="text-gray-700">{funcao}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'programas-ferramentas',
      title: 'Programas e ferramentas relacionados com a Cgviva',
      icon: 'fas fa-tools',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: 'fas fa-database', title: 'SINAN - Módulo Violência', desc: 'Sistema de Informação de Agravos de Notificação para casos de violência.' },
            { icon: 'fas fa-chart-line', title: 'Painel Interativo', desc: 'Dashboard de Violência Interpessoal e Autoprovocada com dados atualizados.' },
            { icon: 'fas fa-car', title: 'Programa Vida no Trânsito', desc: 'Ações de vigilância e prevenção de lesões e mortes no trânsito.' },
            { icon: 'fas fa-mobile-alt', title: 'Aplicativo Viva', desc: 'Ferramenta de apoio ao atendimento e notificação de casos de violência.' },
            { icon: 'fas fa-file-image', title: 'Materiais Educativos', desc: 'Infográficos e materiais educativos sobre prevenção da violência.' },
            { icon: 'fas fa-graduation-cap', title: 'Capacitação', desc: 'Cursos de capacitação em violência para profissionais de saúde.' }
          ].map((programa, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-blue-600 mb-2">
                <i className={`${programa.icon} mr-2`}></i>
                {programa.title}
              </h5>
              <p className="text-gray-700 text-sm">{programa.desc}</p>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <>
      <SEO 
        title="Cgviva - Coordenação-Geral de Vigilância de Violências e Acidentes" 
        description="Conheça a CGVIVA, órgão do Ministério da Saúde responsável pela vigilância epidemiológica de violências e acidentes no Brasil."
        keywords="CGVIVA, vigilância, violência, acidentes, saúde pública, VIVA, prevenção"
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
                {/* Seção Sobre */}
                <section id="sobre" className="scroll-mt-24">
                  <SimpleAccordion
                    id="acc-sobre"
                    items={sobreAccordionItems}
                  />
                </section>

                {/* Seção Apresentação */}
                <section id="apresentacao" className="scroll-mt-24">
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Apresentação CGVIVA</h2>
                    <p className="text-gray-600 mb-6">
                      Assista ao vídeo de apresentação da Coordenação-Geral de Vigilância de Violências e Acidentes.
                    </p>
                    <button 
                      type="button" 
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      onClick={() => setIsVideoModalOpen(true)}
                    >
                      <i className="fas fa-play mr-2"></i>
                      Assistir Vídeo de Apresentação
                    </button>
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

      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="Apresentação CGVIVA"
        size="large"
        className="video-modal"
      >
        <div className="video-container">
          <video 
            controls 
            autoPlay={isVideoModalOpen}
            style={{ width: '100%', height: 'auto' }}
            aria-label="Vídeo de apresentação da CGVIVA"
          >
            <source src="/img/apres_viva.mp4" type="video/mp4" />
            <p>
              Seu navegador não suporta vídeo HTML5. 
              <a href="/img/apres_viva.mp4" download>
                Baixe o vídeo aqui
              </a>.
            </p>
          </video>
        </div>
      </Modal>
    </>
  )
}

export default Cgviva

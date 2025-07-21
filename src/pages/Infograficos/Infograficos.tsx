import React from 'react'
import { SafeBackButton } from '../../components/UI/BackButton'
import { SEO } from '../../components/SEO/SEO'

const Infograficos: React.FC = () => {
  const infograficos = [
    {
      id: 'violencia-sexual-criancas',
      title: 'Violência sexual contra crianças e adolescentes',
      description: 'Dados estatísticos e informações sobre violência sexual contra crianças e adolescentes no Brasil.',
      category: 'Violência',
      url: 'https://www.gov.br/saude/pt-br/composicao/svsa/infograficos/violencia-sexual-contra-criancas-e-adolescentes.png',
      tags: ['Violência sexual', 'Crianças', 'Adolescentes', 'Prevenção'],
      color: 'bg-red-100 text-red-800'
    },
    {
      id: 'atividade-fisica',
      title: 'Prática de atividade física',
      description: 'Infográfico sobre a importância da prática regular de atividade física para a saúde e prevenção de doenças.',
      category: 'Prevenção',
      url: 'https://www.gov.br/saude/pt-br/composicao/svsa/infograficos/praticas-de-atividade-fisica.png',
      tags: ['Atividade física', 'Prevenção', 'Saúde', 'Bem-estar'],
      color: 'bg-green-100 text-green-800'
    }
  ];

  const categorias = ['Todos', 'Violência', 'Prevenção'];
  const [filtroAtivo, setFiltroAtivo] = React.useState('Todos');

  const infograficosFiltrados = filtroAtivo === 'Todos' 
    ? infograficos 
    : infograficos.filter(item => item.category === filtroAtivo);

  return (
    <>
      <SEO 
        title="Infográficos - CGVIVA" 
        description="Acesse infográficos sobre violência e acidentes. Estatísticas, tendências e informações essenciais sobre saúde pública."
        keywords="infográficos, violência, acidentes, estatísticas, prevenção, saúde pública, CGVIVA"
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SafeBackButton />
          
          {/* Introdução */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Materiais Informativos
              </h2>
              <p className="text-gray-600 mb-4">
                Acesse os infográficos para descobrir estatísticas, tendências e informações essenciais para compreender e lidar com questões relacionadas à violência e acidentes.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <p className="text-blue-800">
                  <i className="fas fa-info-circle mr-2"></i>
                  <strong>Objetivo:</strong> Facilitar o acesso a informações técnicas através de materiais visuais didáticos e acessíveis.
                </p>
              </div>
            </div>
          </div>

          {/* Filtros */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Filtrar por categoria</h3>
            <div className="flex flex-wrap gap-2">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setFiltroAtivo(categoria)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filtroAtivo === categoria
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Infográficos */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {infograficosFiltrados.map((infografico) => (
              <article key={infografico.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${infografico.color}`}>
                      {infografico.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {infografico.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {infografico.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {infografico.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <a 
                      href={infografico.url}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-eye mr-2"></i>
                      Visualizar
                    </a>
                    <a 
                      href={infografico.url}
                      download
                      className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      title="Baixar infográfico"
                    >
                      <i className="fas fa-download"></i>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Mensagem quando não há resultados */}
          {infograficosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-search text-gray-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Nenhum infográfico encontrado
              </h3>
              <p className="text-gray-500">
                Tente selecionar uma categoria diferente.
              </p>
            </div>
          )}

          {/* Call to action */}
          <div className="mt-12 text-center bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Mais Materiais
            </h3>
            <p className="text-gray-600 mb-6">
              Visite o site oficial da CGVIVA para acessar mais materiais educativos e informativos.
            </p>
            <a 
              href="https://www.gov.br/saude/pt-br/composicao/svsa" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              Acessar Portal SVSA
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

export default Infograficos

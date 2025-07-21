import React from 'react'
import { SafeBackButton } from '../../components/UI/BackButton'
import Header from '../../components/Layout/Header'
import { SEO } from '../../components/SEO/SEO'

const SobreDesenvolvedores: React.FC = () => {
  const teamData = {
    ministerio: {
      title: "Ministério da Saúde",
      members: [
        { name: "Alexandre Rocha Santos Padilha", role: "Ministro" }
      ]
    },
    svsa: {
      title: "Secretaria de Vigilância em Saúde e Meio Ambiente - SVSA",
      members: [
        { name: "Mariângela Batista Galvão Simão", role: "Secretária" }
      ]
    },
    daent: {
      title: "Departamento de Análise Epidemiológica e Vigilância de Doenças Não Transmissíveis - DAENT",
      members: [
        { name: "Letícia de Oliveira Cardoso", role: "Diretora" }
      ]
    },
    cgviva: {
      title: "Coordenação-Geral de Vigilância e Prevenção de Violências e Acidentes e Promoção da Cultura de Paz - CGVIVA",
      members: [
        { name: "Naiza Nayla Bandeira de Sá", role: "Coordenadora" }
      ]
    },
    desenvolvimento: {
      title: "Desenvolvimento",
      members: [
        { name: "Marcos Oliveira Silva", role: "Técnico CGVIVA" }
      ]
    },
    equipe: {
      title: "Equipe CGVIVA",
      members: [
        { name: "Camila Rodrigues Azevedo", role: "Técnica" },
        { name: "Cheila Marina de Lima", role: "Técnica" },
        { name: "Daíla Nina Ribeiro Freire", role: "Técnica" },
        { name: "Fernanda Lopes Regina", role: "Técnica" },
        { name: "Gabriela Oliveira", role: "Técnica" },
        { name: "Jurema Correa da Mota", role: "Técnica" },
        { name: "Luiz Otávio Maciel Miranda", role: "Técnico" },
        { name: "Mabell Kallyne Melo Beserra", role: "Técnica" },
        { name: "Marcos Oliveira Silva", role: "Técnico" },
        { name: "Marli de Mesquita Silva Montenegro", role: "Técnica" },
        { name: "Mayara Alves Luis", role: "Técnica" },
        { name: "Pablo Santini Cardoso", role: "Técnico" },
        { name: "Rafael Bello Corassa", role: "Técnico" },
        { name: "Ranielle de Paula Silva", role: "Técnica" },
        { name: "Ricristhi Goncalves de Aguiar Gomes", role: "Técnica" },
        { name: "Samara Frota de Aguiar", role: "Técnica" }
      ]
    }
  };

  const renderTeamSection = (section: any, icon: string, bgColor: string) => (
    <div className={`${bgColor} rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <i className={`${icon} text-blue-600 mr-3`}></i>
        {section.title}
      </h3>
      <div className="space-y-3">
        {section.members.map((member: any, index: number) => (
          <div key={index} className="flex items-center">
            <i className="fas fa-user text-gray-500 mr-3"></i>
            <div>
              <p className="font-medium text-gray-900">{member.name}</p>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <SEO 
        title="Sobre os Desenvolvedores - Equipe VIVA" 
        description="Conheça a equipe responsável pelo desenvolvimento do sistema VIVA - Vigilância de Violências e Acidentes do Ministério da Saúde."
        keywords="desenvolvedores, equipe VIVA, CGVIVA, Ministério da Saúde, SVSA, DAENT"
      />
      <Header />

      <main className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <SafeBackButton />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Sobre os Desenvolvedores
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Vigilância de Violência e Acidentes
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Mensagem de destaque */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 text-center mb-2">
              Elaboração
            </h2>
            <p className="text-blue-800 text-center">
              Este aplicativo foi desenvolvido pela equipe técnica da Coordenação-Geral de Vigilância e Prevenção 
              de Violências e Acidentes e Promoção da Cultura de Paz (CGVIVA)
            </p>
          </div>

          {/* Estrutura Organizacional */}
          <div className="grid gap-8">
            {/* Linha 1 - Ministério */}
            <div className="grid gap-6 md:grid-cols-1">
              {renderTeamSection(teamData.ministerio, "fas fa-landmark", "bg-blue-50")}
            </div>

            {/* Linha 2 - SVSA e DAENT */}
            <div className="grid gap-6 md:grid-cols-2">
              {renderTeamSection(teamData.svsa, "fas fa-shield-alt", "bg-green-50")}
              {renderTeamSection(teamData.daent, "fas fa-chart-line", "bg-purple-50")}
            </div>

            {/* Linha 3 - CGVIVA e Desenvolvimento */}
            <div className="grid gap-6 md:grid-cols-2">
              {renderTeamSection(teamData.cgviva, "fas fa-users-cog", "bg-orange-50")}
              {renderTeamSection(teamData.desenvolvimento, "fas fa-code", "bg-indigo-50")}
            </div>

            {/* Linha 4 - Equipe completa */}
            <div className="grid gap-6 md:grid-cols-1">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
                  <i className="fas fa-users text-blue-600 mr-3"></i>
                  Equipe CGVIVA
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {teamData.equipe.members.map((member, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <i className="fas fa-user-circle text-blue-500 text-xl mr-3 mt-1"></i>
                        <div>
                          <p className="font-medium text-gray-900 text-sm leading-tight">{member.name}</p>
                          <p className="text-xs text-gray-600 mt-1">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Sobre o Projeto
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <i className="fas fa-heart text-red-500 text-3xl mb-3"></i>
                <h3 className="font-semibold text-gray-900 mb-2">Missão</h3>
                <p className="text-gray-600 text-sm">
                  Promover a vigilância de violências e acidentes, contribuindo para a cultura de paz e prevenção.
                </p>
              </div>
              <div className="text-center">
                <i className="fas fa-eye text-blue-500 text-3xl mb-3"></i>
                <h3 className="font-semibold text-gray-900 mb-2">Visão</h3>
                <p className="text-gray-600 text-sm">
                  Ser referência nacional em vigilância epidemiológica de violências e acidentes.
                </p>
              </div>
              <div className="text-center">
                <i className="fas fa-hands-helping text-green-500 text-3xl mb-3"></i>
                <h3 className="font-semibold text-gray-900 mb-2">Valores</h3>
                <p className="text-gray-600 text-sm">
                  Transparência, colaboração, inovação e compromisso com a saúde pública.
                </p>
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

export default SobreDesenvolvedores;

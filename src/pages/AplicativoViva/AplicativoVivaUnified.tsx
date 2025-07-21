import React, { useState } from 'react';
import { SafeBackButton } from '../../components/UI/BackButton';
import SectionNav from '../../components/UI/SectionNav';
import SimpleAccordion from '../../components/UI/SimpleAccordion';
import Quiz from '../../components/Quiz/QuizComponent';
import { PdfButton } from '../../components/UI/LinkButton';
import { SEO } from '../../components/SEO/SEO';
import {
  quizQuestions,
  caseStudies,
  downloadLinks
} from '../../data/aplicativoVivaData';

const sectionList = [
  { id: 'conceitos', label: 'Conceitos sobre violência' },
  { id: 'notificacao', label: 'O que é notificação?' },
  { id: 'interpessoal', label: 'Violência interpessoal' },
  { id: 'autoprovocada', label: 'Violência autoprovocada' },
  { id: 'exercicios', label: 'Exercícios (Quiz)' },
  { id: 'casos', label: 'Estudo de caso' },
];

const AplicativoViva: React.FC = () => {
  const [quizAnswers, setQuizAnswers] = useState<Record<string, boolean>>({});

  const checkAnswer = (questionId: string, isCorrect: boolean) => {
    if (quizAnswers[questionId] !== undefined) return;
    setQuizAnswers(prev => ({ ...prev, [questionId]: isCorrect }));
  };

  // Criar accordions para conceitos - Versão simplificada para debug
  const conceitosAccordionItems = [
    {
      id: 'o-que-e-violencia',
      title: 'O que é violência?',
      icon: 'fas fa-question-circle',
      content: (
        <div className="space-y-4">
          <p className="mb-3">
            <strong>Para a área da saúde e para fins de notificação, considera-se como violência "o uso intencional de força física ou do poder, real ou em ameaça, contra si próprio, contra outra pessoa, ou contra um grupo ou uma comunidade que resulte ou tenha possibilidade de resultar em lesão, morte, dano psicológico, deficiência de desenvolvimento ou privação" (KRUG, 2002).</strong>
          </p>
          <p className="mb-3">
            A Política Nacional de Redução da Morbimortalidade por Acidentes e Violências define violência como as ações humanas que afetam a integridade e a saúde física, moral, mental ou espiritual.
          </p>
          <PdfButton 
            href="https://bvsms.saude.gov.br/bvs/publicacoes/politica_reducao_morbimortalidade_acidentes_2ed.pdf"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Saber mais
          </PdfButton>
        </div>
      )
    },
    {
      id: 'tipos-violencia',
      title: 'Tipos de violência',
      icon: 'fas fa-list-ul',
      content: (
        <div className="space-y-4">
          <p>A Organização Mundial da Saúde (OMS) estabelece uma tipologia de três grandes grupos, segundo quem comete o ato violento:</p>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h4 className="font-semibold text-red-800 mb-2">
              <i className="fas fa-user-injured mr-2"></i>
              Violência autoprovocada/autoinfligida
            </h4>
            <p className="text-red-700">
              Compreende ideação suicida, autoagressões, tentativas de suicídio e suicídios. A ideação suicida não é objeto de notificação no Viva, mas requer ações de atenção integral em saúde.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h4 className="font-semibold text-red-800 mb-2">
              <i className="fas fa-house-crack mr-2"></i>
              Violência doméstica/intrafamiliar
            </h4>
            <p className="text-red-700">
              É a que ocorre entre os parceiros íntimos e entre os membros da família (no ambiente da casa ou não). Esse tipo de violência não se refere apenas ao espaço físico onde ocorre, mas também às relações em que se constrói e efetua.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h4 className="font-semibold text-red-800 mb-2">
              <i className="fas fa-people-group mr-2"></i>
              Violência comunitária/extrafamiliar
            </h4>
            <p className="text-red-700">
              É aquela que ocorre no ambiente social em geral, entre conhecidos ou desconhecidos. É praticada por meio de agressão às pessoas, por atentado à sua integridade e vida e/ou a seus bens.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'natureza-violencia',
      title: 'Natureza da violência',
      icon: 'fas fa-clipboard-list',
      content: (
        <div className="space-y-4">
          <p>
            A OMS estabelece, também, distinções sobre as naturezas da violência, destacando-se: <strong>física, sexual, psicológica/moral e negligência/abandono</strong>.
          </p>
          <p>
            O Ministério da Saúde incorporou outras naturezas de violências: tortura; violência financeira/econômica; tráfico de seres humanos; trabalho escravo; trabalho infantil; intervenção legal.
          </p>
          <PdfButton 
            href="https://bvsms.saude.gov.br/bvs/publicacoes/viva_instrutivo_violencia_interpessoal_autoprovocada_2ed.pdf"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Saber mais
          </PdfButton>
        </div>
      )
    }
  ];

  // Criar accordions para violência interpessoal - Versão simplificada
  const interpessoalAccordionItems = [
    {
      id: 'criancas-adolescentes',
      title: 'Crianças e adolescentes',
      icon: 'fas fa-child',
      content: (
        <div className="space-y-4">
          <p>
            A violência contra crianças e adolescentes pode ocorrer em diferentes contextos e manifestar-se de diversas formas. É fundamental reconhecer os sinais e garantir a proteção integral.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h5 className="font-semibold text-blue-800 mb-2">Principais formas:</h5>
            <ul className="text-blue-700 space-y-1">
              <li>• Violência física</li>
              <li>• Violência sexual</li>
              <li>• Violência psicológica</li>
              <li>• Negligência e abandono</li>
              <li>• Trabalho infantil</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'mulheres',
      title: 'Mulheres',
      icon: 'fas fa-venus',
      content: (
        <div className="space-y-4">
          <p>
            A violência contra a mulher é um problema de saúde pública que afeta mulheres de todas as idades, classes sociais, etnias e níveis de escolaridade.
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
            <h5 className="font-semibold text-purple-800 mb-2">Lei Maria da Penha (Lei 11.340/2006):</h5>
            <p className="text-purple-700">
              Define violência doméstica e familiar contra a mulher como qualquer ação ou omissão baseada no gênero que cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'idosos',
      title: 'Pessoa idosa',
      icon: 'fas fa-user-clock',
      content: (
        <div className="space-y-4">
          <p>
            A violência contra a pessoa idosa pode ser praticada por familiares, cuidadores, instituições ou desconhecidos, sendo a negligência uma das formas mais comuns.
          </p>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
            <h5 className="font-semibold text-orange-800 mb-2">Estatuto do Idoso (Lei 10.741/2003):</h5>
            <p className="text-orange-700">
              Garante direitos fundamentais à pessoa idosa e estabelece medidas de proteção contra violência, negligência, discriminação e outras violações.
            </p>
          </div>
        </div>
      )
    }
  ];

  // Criar accordions para violência autoprovocada - Versão simplificada
  const autoprovocadaAccordionItems = [
    {
      id: 'ideacao-suicida',
      title: 'Ideação suicida',
      icon: 'fas fa-brain',
      content: (
        <div className="space-y-4">
          <p>
            A ideação suicida refere-se a pensamentos sobre suicídio, que podem variar desde considerações passageiras até planos detalhados.
          </p>
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <p className="text-red-700">
              <strong>Importante:</strong> A ideação suicida não é objeto de notificação no VIVA, mas requer ações de atenção integral em saúde mental.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'autoagressao',
      title: 'Autoagressões',
      icon: 'fas fa-hand-fist',
      content: (
        <div className="space-y-4">
          <p>
            São comportamentos intencionais de causar dano a si mesmo, sem intenção suicida. Podem incluir cortes, queimaduras, socos contra objetos, entre outros.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-700">
              <strong>Atenção:</strong> Mesmo sem intenção suicida, as autoagressões requerem avaliação e acompanhamento adequados.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'tentativa-suicidio',
      title: 'Tentativas de suicídio',
      icon: 'fas fa-exclamation-triangle',
      content: (
        <div className="space-y-4">
          <p>
            São comportamentos autoinfligidos com evidência de que a pessoa tinha intenção de morrer, mas que não resultaram em morte.
          </p>
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <p className="text-red-700">
              <strong>Notificação obrigatória:</strong> Todos os casos de tentativa de suicídio devem ser notificados no VIVA.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'suicidio',
      title: 'Suicídio',
      icon: 'fas fa-cross',
      content: (
        <div className="space-y-4">
          <p>
            É a morte causada por comportamento autoinfligido com evidência de que a pessoa tinha intenção de morrer.
          </p>
          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <p className="text-gray-700">
              <strong>Importante:</strong> O suicídio consumado é registrado no SIM (Sistema de Informações sobre Mortalidade).
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <SEO 
        title="Aplicativo Viva - Conceitos sobre Violência e Notificação"
        description="Aprenda sobre conceitos de violência, tipos, naturezas e processo de notificação. Material educativo para profissionais de saúde."
        keywords="violência, notificação, VIVA, saúde pública, prevenção"
      />

      <main id="main-content" className="container mx-auto px-4 py-8" role="main">
        <SafeBackButton />
        
        {/* Navegação móvel */}
        <div className="lg:hidden mb-6">
          <details className="group">
            <summary className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <span className="font-semibold text-gray-900">Índice da página</span>
              <i className="fas fa-chevron-down transition-transform group-open:rotate-180"></i>
            </summary>
            <div className="mt-2 p-4 bg-white border border-gray-200 rounded-lg">
              <nav aria-label="Navegação móvel">
                <ul className="space-y-2">
                  {sectionList.map(({ id, label }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="block text-gray-700 hover:text-blue-600 py-2 transition-colors"
                        onClick={() => {
                          // Fecha o dropdown após clicar
                          const details = document.querySelector('details');
                          if (details) details.open = false;
                        }}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </details>
        </div>

        <div className="flex gap-8">
          {/* Navegação lateral */}
          <SectionNav items={sectionList} />

          {/* Conteúdo */}
          <div className="flex-1 space-y-16 section-content">
            {/* 1. Conceitos sobre violência */}
            <section id="conceitos" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Conceitos sobre violência</h2>
              <p className="text-gray-600 mb-6">
                Explore os conceitos fundamentais sobre violência, seus tipos e naturezas para melhor compreensão.
              </p>
              
              <SimpleAccordion
                id="acc-conceitos"
                items={conceitosAccordionItems}
              />
            </section>

            {/* 2. O que é notificação */}
            <section id="notificacao" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">O que é notificação?</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <p className="text-blue-800">
                  <strong>Notificação</strong> é a comunicação obrigatória de suspeita ou confirmação de violência 
                  aos órgãos competentes, realizada por profissionais de saúde mediante o preenchimento da 
                  Ficha de Notificação/Investigação Individual de Violência Doméstica, Sexual e/ou outras Violências.
                </p>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Objetivos da notificação:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-600 mr-3 mt-1"></i>
                  <span>Conhecer a magnitude e características das violências</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-600 mr-3 mt-1"></i>
                  <span>Orientar políticas públicas de prevenção e atenção às vítimas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-600 mr-3 mt-1"></i>
                  <span>Planejar ações de promoção da cultura de paz</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-600 mr-3 mt-1"></i>
                  <span>Desenvolver estratégias de vigilância e prevenção</span>
                </li>
              </ul>

              <div className="grid md:grid-cols-2 gap-4">
                {downloadLinks.map((link) => (
                  <PdfButton 
                    key={link.id}
                    href={link.url}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-gray-900">{link.title}</div>
                      <div className="text-sm text-gray-600">{link.description}</div>
                    </div>
                  </PdfButton>
                ))}
              </div>
            </section>

            {/* 3. Violência interpessoal */}
            <section id="interpessoal" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Violência interpessoal</h2>
              <p className="text-gray-600 mb-6">
                A violência interpessoal é subdividida em violência doméstica/intrafamiliar e violência comunitária/extrafamiliar, 
                afetando diferentes grupos populacionais de formas específicas.
              </p>
              <SimpleAccordion
                id="acc-interpessoal"
                items={interpessoalAccordionItems}
              />
            </section>

            {/* 4. Violência autoprovocada */}
            <section id="autoprovocada" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Violência autoprovocada</h2>
              <p className="text-gray-600 mb-6">
                A violência autoprovocada abrange diferentes comportamentos autoinfligidos, desde ideação suicida 
                até atos consumados, cada qual com suas especificidades para notificação e acompanhamento.
              </p>
              <SimpleAccordion
                id="acc-auto"
                items={autoprovocadaAccordionItems}
              />
            </section>

            {/* 5. Exercícios (Quiz) */}
            <section id="exercicios" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Exercícios</h2>
              <p className="text-gray-600 mb-6">
                Teste seus conhecimentos sobre os conceitos de violência e notificação com estas questões:
              </p>
              <Quiz 
                questions={quizQuestions}
                answers={quizAnswers}
                onAnswer={checkAnswer}
              />
            </section>

            {/* 6. Estudo de caso */}
            <section id="casos" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Estudo de caso</h2>
              <p className="text-gray-600 mb-6">
                Abaixo estão alguns relatos de casos para exemplificar o preenchimento da ficha de notificação de violência.
              </p>
              
              <div className="space-y-8">
                {caseStudies.map((caso) => (
                  <article key={caso.id} className="case-study">
                    <h3 className="text-xl font-semibold mb-4">{caso.title}</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Relato:</h4>
                      <p className="text-gray-700">{caso.relato}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Objetivo:</h4>
                      <p className="text-gray-700">{caso.objetivo}</p>
                    </div>
                    
                    {caso.hasImage && (
                      <div className="mt-4">
                        <img 
                          src={caso.imageUrl} 
                          alt={caso.imageAlt}
                          className="w-full h-auto rounded-lg shadow-md"
                        />
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
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
};

export default AplicativoViva;

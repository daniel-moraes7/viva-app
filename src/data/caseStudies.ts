import { CaseStudy } from '../types'

export const caseStudies: CaseStudy[] = [
  {
    id: "caso-1",
    title: "Caso 1",
    description: `Paciente, sexo feminino, nascida em 20/10/1996, cor parda, cursando 8º série do ensino fundamental, 
                  não possui deficiência. Reside no Bairro Flor de Liz, em Passagem (SP). Chegou ao serviço de saúde 
                  no dia 08 de setembro de 2021, às 21:20 horas, em veículo particular. Relata que, por volta das 20:45 
                  horas, trafegava pelo bairro Amaranto, conduzindo uma motocicleta, quando um cachorro atravessou na 
                  frente da moto, não conseguindo evitar a colisão. Apresenta várias escoriações pelo corpo. Usava capacete 
                  e não ingeriu bebida alcoólica nas últimas seis horas anteriores à ocorrência. Recebeu atendimento 
                  e, posteriormente, alta.`,
    objective: "Exemplificar um relato que não seja objeto de notificação, neste caso o envolvimento em acidente de trânsito.",
    isNotifiable: false
  },
  {
    id: "caso-2", 
    title: "Caso 2",
    description: `Paciente com 87 anos, do sexo feminino, viúva, cor parda, analfabeta, aposentada, possui deficiência física. 
                  Vítima de violência física, psicológica/moral e sexual, com o uso de força física/espancamento e manipulação 
                  da genitália, perpetrada pelo filho de 52 anos. Este filho vive com a paciente e é responsável por seus cuidados. 
                  Após atendimento foi encaminhada para a delegacia de atendimento à mulher/DEAM, Centro de Referência da Mulher 
                  e Centro de Referência da Assistência Social/ CREAS-CRAS.`,
    objective: "Exemplificar a notificação de caso suspeito ou confirmado de violências contra pessoa idosa e possíveis inconsistências no preenchimento dos campos 56, 58 e 59.",
    images: ["/img/fch_caso2.png"],
    isNotifiable: true
  },
  {
    id: "caso-3",
    title: "Caso 3", 
    description: `Paciente com 32 anos, travesti, conhecida como Tyffani, informa ser de cor parda, ter completado o 9º ano 
                  do ensino fundamental, nega deficiências. Mora na Itália e tem registro profissional como estilista no país
                  europeu. Todos os anos passa um período de férias no Brasil para visitar a mãe. Possui cabelos loiros compridos, 
                  têm implante de silicone em várias partes do corpo. Estava dentro de um carro quando, segundo populares, foi baleada 
                  por alguém que estava no banco de passageiro do veículo. Um disparo atingiu a axila direita, atingindo a mama, 
                  o que promoveu o vazamento do silicone para toda a caixa torácica, e o outro, passou de raspão pela cabeça 
                  deixando-a desacordada.`,
    objective: "Exemplificar a notificação de caso suspeito ou confirmado de violência contra população LGBT e possíveis inconsistências no preenchimento dos campos 38 e 39",
    images: ["/img/fch_caso3.png"],
    isNotifiable: true
  },
  {
    id: "caso-4",
    title: "Caso 4",
    description: `Paciente masculino, 24 anos, cor preta, educação ignorada, residência ignorada, deu entrada no hospital Odilon Behrens 
                  (Belo Horizonte/MG) trazido pela viatura policial. Paciente apresenta perfuração por arma de fogo no tórax, 
                  instabilidade hemodinâmica e possível hemorragia interna. O Policial Militar informou que o paciente foi surpreendido
                  assaltando uma padaria portando uma faca, na Rua Cana Caiana, Fazenda Nova, Belo Horizonte (MG). Familiares do jovem relatam
                  que os policiais chegaram dando chutes e socos no suspeito e que este, ao tentar fugir, foi atingido pelo projétil de arma de fogo, caindo em seguida.`,
    objective: "Exemplificar a notificação de caso suspeito ou confirmado de violência por intervenção legal e possíveis inconsistências no preenchimento dos campos 56 e 61",
    images: ["/img/fch_caso2.png"],
    isNotifiable: true
  },
  {
    id: "caso-5",
    title: "Caso 5",
    description: `Paciente, sexo feminino, 19 anos, cor parda, empregada doméstica, 1º grau completo, chegou ao hospital de táxi. 
                  Informa que, por volta das 5 horas da manhã, quando ia para o trabalho, foi agredida por um desconhecido enquanto estava em um ponto
                  de ônibus, na Rua dos Pataxós próximo ao número 50, no Centro de Belo Horizonte (MG).
                  A vítima foi arrastada para uma garagem próxima e forçada a ter relação sexual com o agressor, apresentando vários hematomas nos
                  braços e pernas. Foi realizado boletim de ocorrência policial e exames de corpo de delito, e, em seguida, foi
                  conduzida ao ambulatório especializado para vítimas de violência sexual, no próprio hospital.`,
    objective: "Exemplificar a notificação de caso suspeito ou confirmado de violência sexual contra mulher e preenchimento dos campos 56 a 64.",
    images: ["/img/fch_caso2.png"],
    isNotifiable: true
  },
  {
    id: "caso-6",
    title: "Caso 6",
    description: `Paciente, sexo feminino, 22 anos, branca, estudante (2º grau incompleto), faz uso de medicação antidepressiva. Foi trazida pelo
                  SAMU, lúcida, com história de tentativa de suicídio, na própria residência, apresentando lesão corto-contusa extensa nos pulsos.
                  Deprimida, pálida, taquicárdica e taquipnéica, sem sinais de consumo de bebida alcoólica. História anterior de tentativa de suicídio. 
                  Foi realizada sutura das lesões e encaminhada ao ambulatório de urgência em Saúde Mental, para acompanhamento.`,
    objective: "Exemplificar a notificação de caso suspeito ou confirmado de lesão autoprovocada e possíveis inconsistências no preenchimento dos campos 54, 56, 60 e 61.",
    images: ["/img/fch_caso6.png"],
    isNotifiable: true
  }
]
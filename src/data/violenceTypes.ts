export const violenceTypes = {
  interpersonal: {
    children: {
      title: "Crianças e adolescentes",
      ageRange: "0 a 19 anos", 
      mustNotify: true,
      authorities: ["Conselho Tutelar"],
      commonTypes: ["física", "sexual", "psicológica", "negligência"],
      legalBasis: "Lei nº 8.069/1990 (ECA) - Art. 13",
      immediateNotification: ["violência sexual", "tentativa de suicídio"],
      additionalInfo: "Casos de violências contra crianças e adolescentes devem ser obrigatoriamente comunicados ao Conselho Tutelar"
    },
    women: {
      title: "Mulheres", 
      ageRange: "Todas as idades",
      mustNotify: true,
      authorities: ["Autoridade policial (em casos de risco de feminicídio ou lesão corporal grave)"],
      commonTypes: ["física", "psicológica", "sexual", "patrimonial", "moral"],
      legalBasis: "Lei nº 10.778/2003 e Lei nº 13.931/2019",
      immediateNotification: ["violência sexual"],
      additionalInfo: "Independentemente do tipo ou natureza da violência e faixa etária"
    },
    elderly: {
      title: "Pessoa idosa",
      ageRange: "60 anos ou mais", 
      mustNotify: true,
      authorities: ["Autoridade policial", "Ministério Público", "Conselho do Idoso"],
      commonTypes: ["física", "psicológica", "sexual", "negligência", "financeira"],
      legalBasis: "Lei nº 10.741/2003 (Estatuto do Idoso) - Art. 19",
      immediateNotification: ["violência sexual"],
      additionalInfo: "Independentemente do tipo e da natureza da violência e gênero"
    },
    peopleWithDisabilities: {
      title: "Pessoa com deficiência",
      ageRange: "Todas as idades",
      mustNotify: true,
      authorities: ["Autoridade policial", "Ministério Público", "Conselhos dos Direitos da Pessoa com Deficiência"],
      commonTypes: ["física", "psicológica", "sexual", "negligência", "discriminação"],
      legalBasis: "Lei nº 13.146/2015 (Lei Brasileira de Inclusão) - Art. 26",
      immediateNotification: ["violência sexual"],
      additionalInfo: "Em ambos os sexos e em todas as idades, devido à assimetria nas relações de poder",
      disabilityTypes: {
        fisica: "Alteração completa ou parcial de uma ou mais partes do corpo humano",
        intelectual: "Funcionamento intelectual significativamente inferior à média",
        visual: "Perda de visão incorrigível (cegueira ou baixa visão)",
        auditiva: "Perda bilateral, parcial ou total, de 41 decibéis ou mais",
        multiplas: "Associação de duas ou mais deficiências",
        mobilidadeReduzida: "Dificuldade de movimentar-se, permanente ou temporariamente",
        ostomia: "Intervenção cirúrgica que cria um ostoma na parede abdominal",
        transtornoMental: "Esquizofrenia, transtorno bipolar, TOC, autismo, demência",
        transtornoComportamento: "Distúrbios emocionais, de conduta, funcionamento social"
      }
    },
    indigenous: {
      title: "Indígena",
      ageRange: "Todas as idades",
      mustNotify: true,
      authorities: ["FUNAI", "Distrito Sanitário Especial Indígena (DSEI)"],
      commonTypes: ["física", "psicológica", "sexual", "negligência", "discriminação"],
      legalBasis: "Convenção nº 169/1996 da OIT",
      immediateNotification: ["violência sexual"],
      additionalInfo: "Populações em situação de vulnerabilidade devido às mudanças culturais e assimetria nas relações de poder"
    },
    lgbtqiapn: {
      title: "LGBTQIAPN+",
      ageRange: "Todas as idades", 
      mustNotify: true,
      authorities: ["Autoridade policial", "Ministério Público", "Se criança: Conselho Tutelar"],
      commonTypes: ["física", "psicológica", "moral", "autoprovocada", "sexual"],
      legalBasis: "Portaria nº 2.836/2011 (Política Nacional de Saúde Integral LGBT)",
      immediateNotification: ["violência sexual", "tentativa de suicídio"],
      additionalInfo: "Em função da vulnerabilidade deste grupo social às violências",
      identityTypes: {
        orientacaoSexual: ["heterossexual", "homossexual", "bissexual"],
        identidadeGenero: ["travesti", "mulher transexual", "homem transexual"]
      }
    },
    men: {
      title: "Homens",
      ageRange: "Todas as idades",
      mustNotify: true, // Apenas em casos específicos
      authorities: ["Depende do tipo de violência"],
      commonTypes: ["doméstica/intrafamiliar", "sexual", "autoprovocada", "trabalho escravo", "tortura", "intervenção legal", "homofóbica"],
      legalBasis: "Portaria de Consolidação nº 4/2017",
      immediateNotification: ["violência sexual", "tentativa de suicídio"],
      additionalInfo: "Casos suspeitos ou confirmados de violência doméstica/intrafamiliar, sexual, autoprovocada, tráfico de pessoas, trabalho escravo, trabalho infantil, tortura, intervenção legal e violências homofóbicas",
      extrafamiliarExclusion: "Violência extrafamiliar cujas vítimas sejam adultos (20 a 59 anos) do sexo masculino NÃO são objeto de notificação (ex: brigas entre gangues, estádios)"
    }
  },
  selfInflicted: {
    title: "Violência autoprovocada",
    types: ["ideação suicida", "autoagressões", "tentativa de suicídio", "suicídio"],
    immediateNotification: ["tentativa de suicídio"],
    ageRange: "Todos os ciclos de vida, inclusive crianças",
    mustNotify: true,
    authorities: ["Vigilância Epidemiológica", "Rede de atenção psicossocial"],
    definitions: {
      ideacaoSuicida: {
        description: "Pensamentos que promovem o desejo de dar fim à própria vida",
        isNotifiable: false,
        action: "Requer ações de atenção integral em saúde"
      },
      autoagressoes: {
        description: "Atos de automutilação (arranhaduras, cortes, mordidas, amputação)",
        isNotifiable: true,
        action: "Notificação compulsória"
      },
      tentativaSuicidio: {
        description: "Condutas com objetivo de se ferir com intenção de se matar",
        isNotifiable: true,
        action: "Notificação IMEDIATA (até 24h) para ações rápidas de prevenção"
      },
      suicidio: {
        description: "Tentativa de suicídio que resultou em morte",
        isNotifiable: true,
        action: "Notificação compulsória para vigilância epidemiológica"
      }
    }
  },
  specificTypes: {
    workViolence: {
      trabalhoEscravo: {
        title: "Trabalho Escravo",
        description: "Movimento de pessoas por meio de engano ou coerção para exploração",
        mustNotify: true,
        ageRange: "Todas as idades",
        legalBasis: "Código Penal Brasileiro"
      },
      trabalhoInfantil: {
        title: "Trabalho Infantil", 
        description: "Atividade efetuada por crianças e adolescentes de modo obrigatório, regular, rotineiro",
        mustNotify: true,
        ageRange: "Menores de 18 anos",
        legalBasis: "Constituição Federal, Art. 7º, XXXIII",
        restrictions: "Proibido trabalho noturno, perigoso ou insalubre a menores de 18 anos, e qualquer trabalho a menores de 16 anos (exceto aprendiz a partir de 14 anos)"
      }
    },
    institutionalViolence: {
      intervencaoLegal: {
        title: "Violência por Intervenção Legal",
        description: "Violência produzida durante intervenção por agente legal público (polícia, agente da lei)",
        mustNotify: true,
        ageRange: "Todas as idades",
        legalBasis: "Lei nº 4.898/1965 (Crime de abuso de autoridade)",
        means: ["armas de fogo", "explosivos", "uso de gás", "objetos contundentes", "empurrão", "golpe", "murro"]
      },
      tortura: {
        title: "Tortura",
        description: "Ato de constranger alguém com emprego de força ou grave ameaça, causando sofrimento físico ou mental",
        mustNotify: true,
        ageRange: "Todas as idades", 
        legalBasis: "Lei nº 9.455/1997",
        purposes: ["obter informação", "declaração", "confissão", "provocar ação criminosa", "discriminação racial/religiosa"]
      }
    },
    trafficking: {
      traficoSeresHumanos: {
        title: "Tráfico de Seres Humanos",
        description: "Movimento de pessoas por meio de engano ou coerção para exploração",
        mustNotify: true,
        ageRange: "Todas as idades",
        purposes: ["prostituição", "trabalho sem remuneração", "trabalho doméstico", "trabalho escravo", "casamento servil", "remoção de órgãos"],
        scope: "Pode ocorrer dentro de um mesmo país ou entre países"
      }
    }
  }
}
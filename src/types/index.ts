export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
  icon?: string
  isExpanded?: boolean
}

export interface QuizOption {
  text: string
  isCorrect: boolean
}

export interface QuizQuestion {
  id: string
  question: string
  options: QuizOption[]
}

export interface CaseStudy {
  id: string
  title: string
  description: string
  objective: string
  content?: React.ReactNode
  images?: string[]
  isNotifiable: boolean
}

// 📋 INTERFACE COMPLETA DO FORMULÁRIO DE NOTIFICAÇÃO
export interface NotificationForm {
  // DADOS GERAIS
  dadosGerais: {
    tipoNotificacao: 'individual' | 'surto'
    agravo: string
    dataNotificacao: string
    municipioNotificacao: string
    unidadeSaude: string
    dataPreenchimento: string
  }

  // NOTIFICAÇÃO INDIVIDUAL  
  dadosNotificacao: {
    numeroNotificacao: string
    dataNotificacao: string
    uf: string
    municipioNotificacao: string
    codigoIbgeNotificacao: string
    unidadeSaude: string
    codigoUnidadeSaude: string
  }

  // DADOS DE RESIDÊNCIA
  dadosResidencia: {
    nome: string
    dataAtendimento: string
    dataNascimento: string
    idade: number
    sexo: 'M' | 'F' | 'I' // Masculino, Feminino, Ignorado
    gestante: 'sim' | 'nao' | 'naoSeAplica' | 'ignorado'
    cor: 'branca' | 'preta' | 'amarela' | 'parda' | 'indigena' | 'ignorado'
    escolaridade: string
    numeroCartaoSus: string
    nomeMae: string
    uf: string
    municipioResidencia: string
    codigoIbgeResidencia: string
    distrito: string
    bairro: string
    logradouro: string
    numero: string
    complemento: string
    geoCampo1: string
    geoCampo2: string
    pontoReferencia: string
    cep: string
    telefone: string
    zona: 'urbana' | 'rural' | 'periurbana' | 'ignorado'
  }

  // DADOS DA PESSOA ATENDIDA
  dadosPessoa: {
    nomeSocial: string
    ocupacao: string
    situacaoConjugal: 'solteiro' | 'casado' | 'viuvo' | 'separado' | 'naoSeAplica' | 'ignorado'
    orientacaoSexual: 'heterossexual' | 'homossexual' | 'bissexual' | 'naoSeAplica' | 'ignorado'
    identidadeGenero: 'travesti' | 'mulherTransexual' | 'homemTransexual' | 'naoSeAplica' | 'ignorado'
    possuiDeficiencia: 'sim' | 'nao' | 'ignorado'
    tipoDeficiencia: {
      deficienciaFisica: boolean
      deficienciaIntelectual: boolean
      deficienciaVisual: boolean
      deficienciaAuditiva: boolean
      transtornoMental: boolean
      transtornoComportamento: boolean
      outras: string
    }
  }

  // DADOS DA OCORRÊNCIA
  dadosOcorrencia: {
    ufOcorrencia: string
    municipioOcorrencia: string
    codigoIbgeOcorrencia: string
    distrito: string
    bairro: string
    logradouro: string
    numero: string
    complemento: string
    geoCampo3: string
    geoCampo4: string
    pontoReferencia: string
    zona: 'urbana' | 'rural' | 'periurbana' | 'ignorado'
    horaOcorrencia: string
    localOcorrencia: 'residencia' | 'habitacaoColetiva' | 'escola' | 'localPraticaEsportiva' | 'bar' | 'viaPublica' | 'comercio' | 'industrias' | 'outro' | 'ignorado'
    ocorreuOutrasVezes: 'sim' | 'nao' | 'ignorado'
    lesaoAutoprovocada: 'sim' | 'nao' | 'ignorado'
  }

  // VIOLÊNCIA
  dadosViolencia: {
    motivacao: 'sexismo' | 'homofobia' | 'racismo' | 'intoleranciaReligiosa' | 'xenofobia' | 'conflitoGeracional' | 'situacaoRua' | 'deficiencia' | 'outros' | 'naoSeAplica' | 'ignorado'
    tipoViolencia: {
      fisica: boolean
      psicologica: boolean
      tortura: boolean
      sexual: boolean
      traficoSeresHumanos: boolean
      financeiraEconomica: boolean
      negligenciaAbandono: boolean
      trabalhoInfantil: boolean
      intervencaoLegal: boolean
      outros: string
    }
    meioAgressao: {
      forcaCorporal: boolean
      enforcamento: boolean
      objetoContundente: boolean
      objetoPerfuroCortante: boolean
      substanciaEnvenenamento: boolean
      armaFogo: boolean
      ameaca: boolean
      outro: string
    }
  }

  // VIOLÊNCIA SEXUAL (se aplicável)
  violenciaSexual: {
    ocorreuViolenciaSexual: 'sim' | 'nao' | 'naoSeAplica' | 'ignorado'
    tipoViolenciaSexual: {
      assedioSexual: boolean
      estupro: boolean
      pornografiaInfantil: boolean
      exploracaoSexual: boolean
      outros: string
    }
    procedimentoRealizado: {
      profilaxiaDst: boolean
      profilaxiaHiv: boolean
      profilaxiaHepatiteB: boolean
      coletaSangue: boolean
      coletaSemen: boolean
      coletaSecrecaoVaginal: boolean
      contraceptivoEmergencia: boolean
      abortoPrevisto: boolean
    }
  }

  // DADOS DO PROVÁVEL AUTOR
  dadosAutor: {
    numeroEnvolvidos: '1' | '2ouMais' | 'ignorado'
    vinculoParentesco: 'pai' | 'mae' | 'padrasto' | 'madrasta' | 'conjuge' | 'exConjuge' | 'namorado' | 'exNamorado' | 'filho' | 'irmao' | 'amigos' | 'desconhecido' | 'cuidador' | 'patrao' | 'policial' | 'propriaPessoa' | 'outros'
    sexoAutor: 'masculino' | 'feminino' | 'ambos' | 'ignorado'
    suspeitaUsoAlcool: 'sim' | 'nao' | 'ignorado'
    cicloVidaAutor: 'crianca' | 'adolescente' | 'jovem' | 'adulto' | 'idoso' | 'ignorado'
  }

  // ENCAMINHAMENTOS
  encaminhamento: {
    foiEncaminhado: 'sim' | 'nao' | 'ignorado'
    redeSaude: boolean
    redeAssistenciaSocial: boolean
    redeEducacao: boolean
    redeAtendimentoMulher: boolean
    conselhoTutelar: boolean
    conselhoIdoso: boolean
    delegaciaAtendimentoMulher: boolean
    delegaciaAtendimentoIdoso: boolean
    centroReferenciaDireitosHumanos: boolean
    ministerioPublico: boolean
    delegaciaEspecializadaCriancaAdolescente: boolean
    outrasDelgacias: boolean
    justicaInfanciaJuventude: boolean
    defensoriaPublica: boolean
  }

  // DADOS FINAIS
  dadosFinais: {
    classificacaoFinal: 'confirmado' | 'descartado' | 'ignorado'
    evolucaoCaso: 'alta' | 'evasaoFuga' | 'obito' | 'ignorado'
    dataEvolucao: string
    dataInvestigacao: string
    municipioOcorrencia: string
  }
}

// 🏥 INTERFACES AUXILIARES
export interface UnidadeSaude {
  codigo: string
  nome: string
  municipio: string
  uf: string
  tipo: 'hospital' | 'upa' | 'posto' | 'clinica'
}

export interface Municipio {
  codigo: string
  nome: string
  uf: string
}

export interface ProfissionalSaude {
  nome: string
  cns: string // Cartão Nacional de Saúde
  funcao: 'medico' | 'enfermeiro' | 'assistenteSocial' | 'psicologo' | 'outro'
  unidadeSaude: string
}

// 📊 ENUMS PARA VALIDAÇÃO
export const TiposViolencia = {
  FISICA: 'fisica',
  PSICOLOGICA: 'psicologica', 
  SEXUAL: 'sexual',
  NEGLIGENCIA: 'negligenciaAbandono',
  TORTURA: 'tortura',
  FINANCEIRA: 'financeiraEconomica',
  TRABALHO_INFANTIL: 'trabalhoInfantil',
  TRAFICO: 'traficoSeresHumanos',
  INTERVENCAO_LEGAL: 'intervencaoLegal'
} as const

export const GruposVulneraveis = {
  CRIANCAS_ADOLESCENTES: 'criancasAdolescentes',
  MULHERES: 'mulheres', 
  IDOSOS: 'idosos',
  PESSOAS_DEFICIENCIA: 'pessoasComDeficiencia',
  INDIGENAS: 'indigenas',
  LGBTQIAPN: 'lgbtqiapn'
} as const

export const LocalesOcorrencia = {
  RESIDENCIA: 'residencia',
  ESCOLA: 'escola', 
  VIA_PUBLICA: 'viaPublica',
  LOCAL_TRABALHO: 'localTrabalho',
  SERVICO_SAUDE: 'servicoSaude',
  OUTRO: 'outro'
} as const
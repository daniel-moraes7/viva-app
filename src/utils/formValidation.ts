import { NotificationForm } from "../types"

export const validateNotificationForm = (data: Partial<NotificationForm>): string[] => {
  const errors: string[] = []
  
  // Validações obrigatórias
  if (!data.dadosResidencia?.nome) {
    errors.push("Nome do paciente é obrigatório")
  }
  
  if (!data.dadosResidencia?.dataNascimento) {
    errors.push("Data de nascimento é obrigatória")
  }
  
  if (!data.dadosResidencia?.sexo) {
    errors.push("Sexo deve ser informado")
  }
  
  if (!data.dadosViolencia?.tipoViolencia || 
      !Object.values(data.dadosViolencia.tipoViolencia).some(v => v === true)) {
    errors.push("Tipo de violência deve ser selecionado")
  }
  
  if (!data.dadosOcorrencia?.localOcorrencia) {
    errors.push("Local de ocorrência deve ser informado")
  }
  
  // Validações condicionais
  if (data.dadosViolencia?.tipoViolencia?.sexual && 
      !data.violenciaSexual?.ocorreuViolenciaSexual) {
    errors.push("Dados de violência sexual devem ser preenchidos quando violência sexual é marcada")
  }
  
  if (data.dadosOcorrencia?.lesaoAutoprovocada === 'sim' &&
      data.dadosAutor?.vinculoParentesco !== 'propriaPessoa') {
    errors.push("Para lesão autoprovocada, o autor deve ser 'própria pessoa'")
  }
  
  return errors
}
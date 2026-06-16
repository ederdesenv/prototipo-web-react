// src/types/ordemServico.ts

export interface OrdemServicoFormData {
  cliente: string
  dataAplicacao: string
  cultura: string
  area: string
  aeronave: string
  piloto: string
  observacoes: string
}

export interface OrdemServicoFormProps {
  mostrarCabecalho?: boolean
  mensagemSucesso?: string
  onGravar?: (dados: OrdemServicoFormData) => void
  exibirAvisoObrigatorios?: boolean
}

export interface CardFuncionalidade {
  category: string
  badge: string
  badgeClass: string
  iconClass: string
  iconColor: string
  title: string
  description: string
  btnClass: string
  btnLabel: string
  borderColor: string
}
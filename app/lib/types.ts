
export interface ContatoData {
  id?: number
  nome: string
  email: string
  mensagem: string
  createdAt?: Date
  updatedAt?: Date
}

export interface AwakeStep {
  letter: string
  title: string  
  subtitle: string
  description: string
  icon: any
  color: string
  textColor: string
}

export interface MatrizCentro {
  name: string
  description: string
  color: string
  icon: any
}

export interface SolucaoItem {
  title: string
  description: string
  icon: any
  color: string
  features: string[]
}

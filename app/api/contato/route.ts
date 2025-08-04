
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contatoSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contatoSchema.parse(body)
    
    // Log do contato (em produção, integrar com serviço de email)
    console.log('Contato recebido:', {
      nome: validatedData.nome,
      email: validatedData.email,
      mensagem: validatedData.mensagem,
      timestamp: new Date().toISOString()
    })

    // Simular sucesso (aqui você pode integrar com:
    // - SendGrid, Mailgun para emails
    // - Zapier Webhook
    // - Banco de dados
    // - CRM, etc.)

    return NextResponse.json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso!' 
    })
  } catch (error) {
    console.error('Erro ao processar contato:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Dados inválidos', errors: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { success: false, message: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

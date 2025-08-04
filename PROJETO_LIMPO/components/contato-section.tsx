
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { useState } from 'react'

export function ContatoSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      mensagem: formData.get('mensagem')
    }

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: 'Mensagem enviada com sucesso!',
          description: 'Obrigado pelo seu interesse. Em breve entraremos em contato.',
        })
        // Reset form
        e.currentTarget.reset()
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      toast({
        title: 'Erro ao enviar mensagem',
        description: 'Tente novamente ou entre em contato diretamente.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pronto para despertar sua Inteligência Evolutiva? Entre em contato e descubra como 
            podemos ajudar você a sair do piloto automático e viver com mais consciência e propósito.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-gray-700">Nome Completo</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu.email@exemplo.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-gray-700">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  placeholder="Conte-nos sobre seus objetivos e como podemos ajudar..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Vamos Conversar</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Cada jornada de transformação é única. Entre em contato para descobrirmos juntos 
                qual é o melhor caminho para despertar sua Inteligência Evolutiva e aplicar 
                o método AWAKE na sua vida.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Mail className="w-6 h-6 text-red-600 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">E-mail</h4>
                  <p className="text-gray-600">contato@ricardonakai.com</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Phone className="w-6 h-6 text-red-600 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Telefone</h4>
                  <p className="text-gray-600">Em breve disponível</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <MapPin className="w-6 h-6 text-red-600 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Localização</h4>
                  <p className="text-gray-600">Atendimento online e presencial</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-2xl text-white">
              <blockquote className="text-lg italic mb-4">
                "Você não precisa de mais força de vontade. Você precisa de uma nova consciência."
              </blockquote>
              <p className="text-red-100">
                - Ricardo Nakai
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

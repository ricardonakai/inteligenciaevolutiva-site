
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, Calendar, Download, BookOpen, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function SobreNakai() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const achievements = [
    {
      number: "25.000+",
      label: "Pessoas Treinadas",
      icon: Users
    },
    {
      number: "20",
      label: "Anos de Jornada",
      icon: Calendar
    },
    {
      number: "100+",
      label: "Organizações Impactadas",
      icon: Award
    }
  ]

  const expertise = [
    {
      title: "Comportamento Humano",
      description: "Especialista em padrões comportamentais e transformação pessoal",
      icon: Target
    },
    {
      title: "Inteligência Evolutiva",
      description: "Criador do conceito e metodologia revolucionária",
      icon: BookOpen
    },
    {
      title: "Método AWAKE",
      description: "Desenvolvedor da abordagem prática de transformação consciente",
      icon: Award
    }
  ]

  return (
    <section id="sobre" className="py-20 bg-white">
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
            Sobre <span className="text-gradient">Ricardo Nakai</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Especialista em comportamento humano, com mais de 25 mil pessoas treinadas em 20 anos de jornada.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image Placeholder */}
            <div className="relative w-full aspect-square max-w-md mx-auto bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/logo.png"
                alt="Ricardo Nakai"
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Ricardo Nakai</h3>
                  <p className="text-red-200">Especialista em Comportamento Humano</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                    className="text-center p-4 bg-gray-50 rounded-xl"
                  >
                    <Icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1 animate-count-up">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ricardo Nakai construiu o conceito de <strong className="text-red-600">Inteligência Evolutiva</strong> e 
                o <strong className="text-red-600">método AWAKE</strong> após décadas de estudo, dor e prática real de transformação.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Sua jornada começou com uma inquietação profunda: <em>"Se já sabemos o que fazer... por que não conseguimos fazer?"</em> 
                Esta pergunta o levou a descobrir que não faltam técnicas ou ferramentas, mas sim consciência do sistema invisível que nos comanda.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Através de sua experiência com milhares de pessoas, equipes, líderes e pais, Ricardo identificou que a verdadeira 
                transformação acontece quando acessamos uma nova inteligência — aquela que atua antes do comportamento, 
                antes da emoção, antes do pensamento.
              </p>
            </div>

            {/* Expertise Areas */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Áreas de Especialização</h3>
              {expertise.map((area, index) => {
                const Icon = area.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                    className="flex items-start p-4 bg-gray-50 rounded-lg"
                  >
                    <Icon className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{area.title}</h4>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 rounded-3xl mb-12"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Missão e Propósito</h3>
            <blockquote className="text-xl italic mb-6 text-gray-300">
              "A Inteligência Evolutiva não é sobre fazer diferente. É sobre ser de volta quem você era... 
              antes de precisar se proteger."
            </blockquote>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ricardo dedica sua vida a ajudar pessoas a sair do piloto automático e assumir o comando 
              da própria consciência. Sua missão é despertar a semente do novo ser humano que existe 
              dentro de cada um, reconectando-nos com nossa essência mais autêntica.
            </p>
          </div>
        </motion.div>

        {/* Media Kit CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-center"
        >
          {/* Temporary placeholder for media kit functionality */}
          <Button
            onClick={() => {
              // Placeholder action - in a real implementation, this would download the media kit
              alert('Funcionalidade de download do Media Kit será implementada em breve. Entre em contato para receber o material.')
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Baixar Mídia Kit</span>
          </Button>
          <p className="text-gray-600 mt-4 text-sm">
            Material completo sobre Ricardo Nakai e a Inteligência Evolutiva
          </p>
        </motion.div>
      </div>
    </section>
  )
}

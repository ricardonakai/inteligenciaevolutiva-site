
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Circle, Square, Triangle } from 'lucide-react'

export function MatrizComportamental() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const centros = [
    {
      name: 'Instinto',
      description: 'Centro do corpo e das reações físicas',
      color: 'bg-red-600',
      icon: Circle
    },
    {
      name: 'Emoção',
      description: 'Centro do coração e dos sentimentos',
      color: 'bg-gray-600',
      icon: Triangle
    },
    {
      name: 'Mente',
      description: 'Centro da cabeça e dos pensamentos',
      color: 'bg-red-800',
      icon: Square
    }
  ]

  const estrategias = [
    {
      name: 'Imposição',
      description: 'Movimento de força e controle',
      direction: 'Contra'
    },
    {
      name: 'Submissão',
      description: 'Movimento de adaptação e aceitação',
      direction: 'Em direção'
    },
    {
      name: 'Retraimento',
      description: 'Movimento de afastamento e proteção',
      direction: 'Para longe'
    }
  ]

  return (
    <section id="matriz-comportamental" className="py-20 bg-white">
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
            Matriz <span className="text-gradient">Comportamental Nakai</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Um sistema revolucionário para compreender os padrões de sobrevivência que moldam nossos comportamentos. 
            Cada pessoa opera a partir de um Tipo de Padrão específico, baseado em três dimensões fundamentais.
          </p>
        </motion.div>

        {/* Visualization da Matriz */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gray-50 p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              Estrutura da Matriz Comportamental
            </h3>

            {/* Centros de Origem Energética */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Centro de Origem Energética</h4>
                {centros.map((centro, index) => {
                  const Icon = centro.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + (index * 0.2), duration: 0.8 }}
                      className="flex items-center mb-4 p-4 bg-white rounded-lg shadow-sm"
                    >
                      <div className={`w-12 h-12 ${centro.color} rounded-full flex items-center justify-center mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h5 className="font-bold text-gray-900">{centro.name}</h5>
                        <p className="text-sm text-gray-600">{centro.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-red-600" />
              </div>

              {/* Estratégias Inconscientes */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Estratégia Inconsciente</h4>
                {estrategias.map((estrategia, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + (index * 0.2), duration: 0.8 }}
                    className="mb-4 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <h5 className="font-bold text-gray-900">{estrategia.name}</h5>
                    <p className="text-sm text-gray-600 mb-1">{estrategia.description}</p>
                    <span className="text-xs text-red-600 font-medium">
                      Movimento: {estrategia.direction}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Central Formula */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="bg-red-600 text-white p-8 rounded-2xl text-center"
            >
              <h4 className="text-2xl font-bold mb-4">Fórmula da Matriz</h4>
              <div className="text-xl font-mono">
                <span className="bg-white/20 px-3 py-1 rounded mr-2">Centro</span>
                <span className="mx-2">+</span>
                <span className="bg-white/20 px-3 py-1 rounded mr-2">Estratégia</span>
                <span className="mx-2">+</span>
                <span className="bg-white/20 px-3 py-1 rounded">Movimento</span>
              </div>
              <p className="mt-4 text-red-100">
                = Seu Padrão de Sobrevivência Único
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Como Funciona */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Como Funciona na Prática</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-red-600 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">1. Diagnóstico do Padrão</h4>
                <p className="text-gray-600">
                  Identifique qual combinação de Centro + Estratégia + Movimento define seu padrão de sobrevivência dominante.
                </p>
              </div>
              <div className="border-l-4 border-gray-400 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">2. Reconhecimento dos Gatilhos</h4>
                <p className="text-gray-600">
                  Compreenda quais situações ativam automaticamente seu padrão e como ele se manifesta em comportamentos específicos.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h4 className="font-bold text-gray-900 mb-2">3. Integração e Evolução</h4>
                <p className="text-gray-600">
                  Aprenda a integrar virtudes de outros padrões para expandir sua flexibilidade comportamental e evolutiva.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefícios da Matriz</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Autoconhecimento profundo dos seus padrões automáticos</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Compreensão clara de onde sua energia está sendo desperdiçada</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Mapeamento dos seus pontos de evolução e crescimento</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Ferramenta prática para melhorar relacionamentos e liderança</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Base sólida para aplicar o método AWAKE de forma personalizada</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Quote Final */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-center bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 rounded-3xl"
        >
          <blockquote className="text-2xl md:text-3xl font-bold italic mb-6">
            "Você não é esse padrão. Isso é o que você aprendeu para sobreviver. 
            Mas agora, você pode viver diferente."
          </blockquote>
          <p className="text-gray-300 text-lg">
            - A Matriz Comportamental Nakai é o mapa para sua libertação
          </p>
        </motion.div>
      </div>
    </section>
  )
}

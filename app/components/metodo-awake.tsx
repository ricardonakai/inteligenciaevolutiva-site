
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye, Lightbulb, Target, Heart, Zap } from 'lucide-react'

export function MetodoAwake() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const awakeSteps = [
    {
      letter: 'A',
      title: 'Awareness',
      subtitle: 'Consciência',
      description: 'Tome consciência dos padrões inconscientes que comandam suas ações. Reconheça os 3 Prompts que operam dentro de você: Sobrevivência, Ancestral e Essência.',
      icon: Eye,
      color: 'bg-red-600',
      textColor: 'text-red-600'
    },
    {
      letter: 'W',
      title: 'Wisdom',
      subtitle: 'Sabedoria',
      description: 'Use sabedoria para interpretar e transformar esses padrões. Escolha conscientemente uma nova resposta em vez de reagir automaticamente.',
      icon: Lightbulb,
      color: 'bg-gray-800',
      textColor: 'text-gray-800'
    },
    {
      letter: 'A',
      title: 'Alignment',
      subtitle: 'Alinhamento',
      description: 'Alinhe pensar, sentir, agir e acreditar em uma nova direção. Crie coerência entre intenção e ação, entre o que você quer ser e como você se comporta.',
      icon: Target,
      color: 'bg-red-600',
      textColor: 'text-red-600'
    },
    {
      letter: 'K',
      title: 'Kindness',
      subtitle: 'Compaixão',
      description: 'Pratique compaixão consigo e com o processo de transformação. Acolha-se com paciência, reconhecendo que mudança real leva tempo.',
      icon: Heart,
      color: 'bg-gray-800',
      textColor: 'text-gray-800'
    },
    {
      letter: 'E',
      title: 'Energy',
      subtitle: 'Vitalidade',
      description: 'Gerencie conscientemente sua energia nos 4 domínios: físico, mental, emocional e espiritual. Mantenha vitalidade para sustentar a transformação.',
      icon: Zap,
      color: 'bg-red-600',
      textColor: 'text-red-600'
    }
  ]

  return (
    <section id="metodo-awake" className="py-20 bg-gray-50">
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
            Método <span className="text-gradient">AWAKE</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            O coração prático da metodologia. O método AWAKE é o fio condutor entre despertar, 
            compreender e transformar. Cada letra representa uma etapa fundamental do processo evolutivo.
          </p>
          <div className="inline-flex items-center space-x-2 bg-red-100 px-6 py-3 rounded-full">
            <span className="text-red-600 font-bold text-lg">A.W.A.K.E.</span>
            <span className="text-gray-600">- O caminho da transformação consciente</span>
          </div>
        </motion.div>

        {/* AWAKE Visualization */}
        <div className="relative mb-16">
          {/* Central AWAKE Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-red-600">
              <span className="text-3xl font-bold text-red-600">AWAKE</span>
            </div>
          </motion.div>

          {/* Steps arranged in a circle */}
          <div className="relative w-full h-96 md:h-[500px]">
            {awakeSteps.map((step, index) => {
              const Icon = step.icon
              const angle = (index * 72) - 90 // 360/5 = 72 degrees between each step, -90 to start at top
              const radius = 180
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + (index * 0.2), duration: 0.8 }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="text-center">
                    <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mb-4 shadow-lg mx-auto`}>
                      <span className="text-3xl font-bold text-white">{step.letter}</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs">
                      <Icon className={`w-6 h-6 ${step.textColor} mx-auto mb-2`} />
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-600 font-medium mb-2">{step.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Detailed Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {awakeSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0 + (index * 0.1), duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-2xl font-bold text-white">{step.letter}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className={`text-sm font-medium ${step.textColor}`}>{step.subtitle}</p>
                  </div>
                </div>
                <Icon className={`w-8 h-8 ${step.textColor} mb-4`} />
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-red-700 p-12 rounded-3xl text-center text-white mt-16"
        >
          <h3 className="text-3xl font-bold mb-4">
            Pronto para Despertar Sua Inteligência Evolutiva?
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            O método AWAKE não é sobre fazer diferente. É sobre ser de volta quem você era... 
            antes de precisar se proteger.
          </p>
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Comece Sua Jornada Agora
          </button>
        </motion.div>
      </div>
    </section>
  )
}

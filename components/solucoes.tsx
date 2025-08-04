
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Heart, Users, Briefcase, MessageSquare, Presentation } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Solucoes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const solucoes = [
    {
      title: 'Transformação Pessoal',
      description: 'Descubra como a Inteligência Evolutiva pode gerar impacto real na sua jornada de autoconhecimento e crescimento pessoal.',
      icon: User,
      color: 'bg-red-600',
      features: [
        'Identificação de padrões limitantes',
        'Desenvolvimento da consciência evolutiva',
        'Aplicação prática do método AWAKE',
        'Reconexão com sua essência autêntica'
      ]
    },
    {
      title: 'Relacionamentos Afetivos',
      description: 'Descubra como a Inteligência Evolutiva pode gerar impacto real na qualidade e profundidade dos seus relacionamentos.',
      icon: Heart,
      color: 'bg-gray-800',
      features: [
        'Comunicação consciente e empática',
        'Resolução de conflitos evolutiva',
        'Intimidade sem co-dependência',
        'Amor baseado na essência, não no padrão'
      ]
    },
    {
      title: 'Pais e Educadores',
      description: 'Descubra como a Inteligência Evolutiva pode gerar impacto real na formação consciente das próximas gerações.',
      icon: Users,
      color: 'bg-red-600',
      features: [
        'Educação baseada na essência da criança',
        'Quebra de padrões geracionais',
        'Desenvolvimento emocional saudável',
        'Criação de ambientes evolutivos'
      ]
    },
    {
      title: 'Liderança e Gestão',
      description: 'Descubra como a Inteligência Evolutiva pode gerar impacto real na sua capacidade de liderar com presença e propósito.',
      icon: Briefcase,
      color: 'bg-gray-800',
      features: [
        'Liderança autêntica e consciente',
        'Gestão de equipes com inteligência evolutiva',
        'Tomada de decisão baseada na essência',
        'Criação de culturas organizacionais saudáveis'
      ]
    },
    {
      title: 'Mentorias e Consultorias',
      description: 'Descubra como a Inteligência Evolutiva pode gerar impacto real no seu desenvolvimento profissional e pessoal personalizado.',
      icon: MessageSquare,
      color: 'bg-red-600',
      features: [
        'Acompanhamento individual personalizado',
        'Aplicação da Matriz Comportamental Nakai',
        'Estratégias evolutivas específicas',
        'Suporte contínuo na jornada de transformação'
      ]
    },
    {
      title: 'Palestras e Treinamentos',
      description: 'Descubra como a Inteligência Evolutiva pode gerar impacto real na transformação coletiva de organizações e grupos.',
      icon: Presentation,
      color: 'bg-gray-800',
      features: [
        'Workshops práticos e vivenciais',
        'Palestras inspiradoras e transformadoras',
        'Treinamentos corporativos customizados',
        'Imersões em Inteligência Evolutiva'
      ]
    }
  ]

  return (
    <section id="solucoes" className="py-20 bg-gray-50">
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
            <span className="text-gradient">Soluções</span> Evolutivas
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A Inteligência Evolutiva se aplica a todas as áreas da vida. Descubra como essa nova abordagem 
            pode transformar diferentes contextos da sua existência com impacto real e duradouro.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solucoes.map((solucao, index) => {
            const Icon = solucao.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover group"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${solucao.color} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {solucao.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {solucao.description}
                </p>

                <div className="space-y-3 mb-6">
                  {solucao.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  Saiba Mais
                </Button>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-red-700 p-12 rounded-3xl text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Transforme Sua Realidade com Inteligência Evolutiva
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Não importa em qual área da sua vida você deseja evoluir. A Inteligência Evolutiva oferece 
            o mapa e as ferramentas para uma transformação real, profunda e sustentável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Agende uma Conversa
            </Button>
            <Button
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg"
            >
              Conheça Ricardo Nakai
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

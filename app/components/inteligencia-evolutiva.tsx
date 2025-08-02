
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Target, Eye, Heart, Zap, Users } from 'lucide-react'

export function InteligenciaEvolutiva() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const pressupostos = [
    {
      title: "Somos seres biológicos Ancestrais",
      description: "Habitamos um corpo ancestral, finito, programado para sobreviver, não para evoluir. Nossa fisiologia ainda responde a ameaças primitivas, economiza energia e resiste ao novo.",
      quote: "Você quer evoluir com um cérebro que só quer te manter vivo.",
      icon: Brain,
      color: "text-red-600"
    },
    {
      title: "A evolução está no desconhecido",
      description: "O desconhecido representa, para o corpo ancestral, ameaça e risco. Mas é exatamente nesse território que a consciência pode florescer. O desconforto do novo é o solo fértil da transformação.",
      quote: "O que te dá medo, talvez seja exatamente o que veio te libertar.",
      icon: Target,
      color: "text-gray-700"
    },
    {
      title: "Tudo é energia",
      description: "Não somos apenas carne, ossos e pensamentos. Somos energia em movimento. Nossas ações são resultado de forças invisíveis que operam em múltiplas dimensões: física, mental, emocional e espiritual.",
      quote: "Seu comportamento é só a superfície visível de uma frequência invisível.",
      icon: Zap,
      color: "text-red-600"
    },
    {
      title: "Essência Divina",
      description: "Existe dentro de cada um uma centelha que não é deste mundo — é divina. Essa Essência é fonte de propósito, criatividade e amor. A verdadeira evolução é acessar essa frequência e manifestá-la na vida prática.",
      quote: "Você não veio encontrar um propósito. Você é o propósito em forma humana.",
      icon: Heart,
      color: "text-gray-700"
    },
    {
      title: "Somos parte de um todo",
      description: "Nenhuma transformação é individual. Estamos todos interligados. Quando um ser humano acessa e vive sua Essência, ele colabora com a cura e evolução do coletivo.",
      quote: "Quando você se cura, algo no mundo respira melhor.",
      icon: Users,
      color: "text-red-600"
    },
    {
      title: "Só existe o agora",
      description: "A vida é agora. E só agora. Nada existe fora do agora. O passado é memória. O futuro é projeção. A vida acontece onde os pés tocam o chão. A Essência só pode se manifestar no presente.",
      quote: "Quanto mais presença no instante, mais plenitude na existência.",
      icon: Eye,
      color: "text-gray-700"
    }
  ]

  return (
    <section id="inteligencia-evolutiva" className="py-20 bg-white">
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
            O que é <span className="text-gradient">Inteligência Evolutiva</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A Inteligência Evolutiva é a capacidade de identificar os comandos inconscientes que moldam suas ações, 
            desconstruir os padrões de sobrevivência que te mantêm preso, reprogramar a forma como você reage ao mundo, 
            e reconectar sua vida à sua identidade essencial.
          </p>
        </motion.div>

        {/* Definition Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-2xl card-hover"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">A Inteligência Que Faltava</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você não precisa de mais força. Precisa de outra inteligência. Se já sabemos o que fazer... 
              por que não conseguimos fazer? Não faltam técnicas. Nem ferramentas. 
              Falta consciência do sistema invisível que nos comanda.
            </p>
            <blockquote className="text-red-600 font-semibold italic">
              "É a habilidade de sair do piloto automático e assumir o comando da sua própria consciência."
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-red-50 p-8 rounded-2xl card-hover"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Por que é "Evolutiva"?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Porque não se trata apenas de mudar para se adaptar — como fazem os animais. 
              Se trata de mudar com intenção, com consciência, com propósito. 
              É a única inteligência que te permite reprogramar sua identidade para viver a partir da essência.
            </p>
            <blockquote className="text-red-600 font-semibold italic">
              "Evoluir não é 'ser mais'. É ser menos automático. Menos reativo. Menos inconsciente."
            </blockquote>
          </motion.div>
        </div>

        {/* Pressupostos Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Pressupostos da <span className="text-gradient">Consciência Evolutiva</span>
          </h3>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Antes de compreender a Inteligência Evolutiva como um novo modelo comportamental, 
            é preciso reconhecer os fundamentos que lhe dão origem.
          </p>
        </motion.div>

        {/* Pressupostos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressupostos.map((pressuposto, index) => {
            const Icon = pressuposto.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${pressuposto.color}`} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {pressuposto.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {pressuposto.description}
                </p>
                <blockquote className="text-red-600 font-semibold italic text-sm">
                  "{pressuposto.quote}"
                </blockquote>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

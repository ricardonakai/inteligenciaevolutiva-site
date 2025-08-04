
"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Target, Brain, MessageSquare, Heart, Activity, Trophy, RefreshCw } from 'lucide-react'

const elos = [
  {
    numero: 1,
    nome: "PADRÃO",
    subtitulo: "A Raiz Invisível",
    descricao: "O Padrão é seu Prompt de Sobrevivência — a programação inconsciente criada na infância que define como você interpreta e responde ao mundo. Este padrão opera 24 horas por dia, filtrando e interpretando cada experiência através de sua lente específica.",
    icon: Brain,
    color: "from-red-500 to-red-600"
  },
  {
    numero: 2,
    nome: "VERDADES",
    subtitulo: "As Crenças Automáticas",
    descricao: "O Padrão gera Verdades — crenças inconscientes sobre você, os outros e o mundo que você aceita como fatos absolutos, sem questionamento.",
    icon: Target,
    color: "from-orange-500 to-orange-600"
  },
  {
    numero: 3,
    nome: "PENSAMENTOS",
    subtitulo: "O Diálogo Interno",
    descricao: "As Verdades geram Pensamentos automáticos — o diálogo interno constante que interpreta cada situação através do filtro das suas crenças.",
    icon: MessageSquare,
    color: "from-yellow-500 to-yellow-600"
  },
  {
    numero: 4,
    nome: "EMOÇÃO",
    subtitulo: "A Resposta Química",
    descricao: "Os Pensamentos geram Emoções — reações químicas no seu corpo que preparam você para a ação baseada na interpretação da situação.",
    icon: Heart,
    color: "from-green-500 to-green-600"
  },
  {
    numero: 5,
    nome: "COMPORTAMENTO",
    subtitulo: "A Ação Visível",
    descricao: "As Emoções geram Comportamentos — suas ações visíveis no mundo, que são a manifestação externa de todo o processo interno.",
    icon: Activity,
    color: "from-blue-500 to-blue-600"
  },
  {
    numero: 6,
    nome: "RESULTADOS",
    subtitulo: "A Confirmação do Padrão",
    descricao: "Os Comportamentos geram Resultados — as consequências reais das suas ações, que ironicamente tendem a confirmar e reforçar o Padrão original.",
    icon: Trophy,
    color: "from-purple-500 to-purple-600"
  }
]

export function CadeiaOrigemComportamental() {
  return (
    <section id="cadeia-origem" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            CADEIA DE ORIGEM COMPORTAMENTAL
          </h2>
        </motion.div>

        {/* Frase de Impacto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border-l-8 border-red-500 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold text-gray-700 leading-relaxed text-center">
              Tudo o que você <span className="text-red-600 font-bold">CONQUISTOU</span> na sua vida até <span className="text-red-600 font-bold">HOJE</span> foi em decorrência de quem você <span className="text-red-600 font-bold">É</span> até <span className="text-red-600 font-bold">AGORA</span>.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-gray-700 leading-relaxed text-center mt-4">
              Se você deseja <span className="text-red-600 font-bold">CONQUISTAR</span> novos ou melhores <span className="text-red-600 font-bold">RESULTADOS</span>, você deve se <span className="text-red-600 font-bold">TORNAR</span> outra pessoa, alguém que você ainda não <span className="text-red-600 font-bold">É</span>!
            </p>
          </div>
        </motion.div>

        {/* Introdução da Cadeia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            Sua vida é governada por uma sequência precisa e implacável:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 text-lg font-bold text-red-600">
            <span>PADRÃO</span>
            <ArrowRight className="w-5 h-5" />
            <span>VERDADES</span>
            <ArrowRight className="w-5 h-5" />
            <span>PENSAMENTOS</span>
            <ArrowRight className="w-5 h-5" />
            <span>EMOÇÃO</span>
            <ArrowRight className="w-5 h-5" />
            <span>COMPORTAMENTO</span>
            <ArrowRight className="w-5 h-5" />
            <span>RESULTADOS</span>
          </div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Vamos destrinchar cada elo dessa cadeia:
          </p>
        </motion.div>

        {/* Elos da Cadeia */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {elos.map((elo, index) => {
            const IconComponent = elo.icon
            return (
              <motion.div
                key={elo.numero}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${elo.color} flex items-center justify-center mb-4 mx-auto`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center mb-4">
                  <span className="text-sm font-bold text-gray-500">ELO {elo.numero}</span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{elo.nome}</h3>
                  <p className="text-red-600 font-semibold">{elo.subtitulo}</p>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {elo.descricao}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Ciclo Vicioso */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200"
        >
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <RefreshCw className="w-8 h-8 text-red-600 mr-2" />
              <h3 className="text-3xl font-bold text-red-800">O CICLO VICIOSO PERFEITO</h3>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              O mais cruel dessa cadeia é que ela cria um <span className="font-bold text-red-600">ciclo vicioso perfeito</span>:
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-700 leading-relaxed">
                Os <span className="font-bold text-red-600">Resultados</span> "confirmam" as <span className="font-bold text-red-600">Verdades</span> originais, fortalecendo o <span className="font-bold text-red-600">Padrão</span>, que gera <span className="font-bold text-red-600">Verdades</span> ainda mais rígidas, que produzem <span className="font-bold text-red-600">Pensamentos</span> mais negativos, que intensificam as <span className="font-bold text-red-600">Emoções</span>, que levam a <span className="font-bold text-red-600">Comportamentos</span> ainda mais limitantes, que geram <span className="font-bold text-red-600">Resultados</span> ainda piores.
              </p>
              
              <div className="mt-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <p className="text-red-800 font-semibold text-center">
                  É um sistema auto-reforçante que se torna mais forte a cada ciclo.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

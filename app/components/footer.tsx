
'use client'

import { Heart } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Ricardo Nakai"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-xl font-bold">Ricardo Nakai</h3>
                <p className="text-red-400 text-sm">Inteligência Evolutiva</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Despertando a semente do novo ser humano através da Inteligência Evolutiva 
              e do método AWAKE. Transformação consciente, real e duradoura.
            </p>
            <p className="text-gray-400 text-sm italic">
              "Uma inteligência que nasce da travessia entre sobrevivência e essência."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navegação</h4>
            <div className="space-y-3">
              <button
                onClick={() => document.getElementById('inteligencia-evolutiva')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-red-400 transition-colors"
              >
                Inteligência Evolutiva
              </button>
              <button
                onClick={() => document.getElementById('metodo-awake')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-red-400 transition-colors"
              >
                Método AWAKE
              </button>
              <button
                onClick={() => document.getElementById('matriz-comportamental')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-red-400 transition-colors"
              >
                Matriz Comportamental
              </button>
              <button
                onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-red-400 transition-colors"
              >
                Soluções
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="text-red-400">E-mail:</span><br />
                contato@ricardonakai.com
              </p>
              <p className="text-gray-300">
                <span className="text-red-400">Atendimento:</span><br />
                Online e presencial
              </p>
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-red-400 hover:text-red-300 transition-colors underline"
              >
                Entre em contato →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Ricardo Nakai. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>para despertar consciências</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

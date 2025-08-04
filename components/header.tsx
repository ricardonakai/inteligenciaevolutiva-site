
'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Ricardo Nakai"
              width={60}
              height={60}
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Ricardo Nakai</h1>
              <p className="text-sm text-red-600">Inteligência Evolutiva</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inteligencia-evolutiva')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Inteligência Evolutiva
            </button>
            <button
              onClick={() => scrollToSection('cadeia-origem')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Cadeia de Origem
            </button>
            <button
              onClick={() => scrollToSection('metodo-awake')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Método AWAKE
            </button>
            <button
              onClick={() => scrollToSection('matriz-comportamental')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Matriz Comportamental
            </button>
            <button
              onClick={() => scrollToSection('solucoes')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Sobre
            </button>
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2"
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inteligencia-evolutiva')}
                className="text-left text-gray-700 hover:text-red-600 transition-colors font-medium px-4 py-2"
              >
                Inteligência Evolutiva
              </button>
              <button
                onClick={() => scrollToSection('cadeia-origem')}
                className="text-left text-gray-700 hover:text-red-600 transition-colors font-medium px-4 py-2"
              >
                Cadeia de Origem
              </button>
              <button
                onClick={() => scrollToSection('metodo-awake')}
                className="text-left text-gray-700 hover:text-red-600 transition-colors font-medium px-4 py-2"
              >
                Método AWAKE
              </button>
              <button
                onClick={() => scrollToSection('matriz-comportamental')}
                className="text-left text-gray-700 hover:text-red-600 transition-colors font-medium px-4 py-2"
              >
                Matriz Comportamental
              </button>
              <button
                onClick={() => scrollToSection('solucoes')}
                className="text-left text-gray-700 hover:text-red-600 transition-colors font-medium px-4 py-2"
              >
                Soluções
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-700 hover:text-red-600 transition-colors font-medium px-4 py-2"
              >
                Sobre
              </button>
              <Button
                onClick={() => scrollToSection('contato')}
                className="bg-red-600 hover:bg-red-700 text-white mx-4"
              >
                Contato
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

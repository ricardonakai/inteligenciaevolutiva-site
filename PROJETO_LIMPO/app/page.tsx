
import HeroSection from '@/components/hero-section'
import InteligenciaEvolutiva from '@/components/inteligencia-evolutiva'
import CadeiaOrigemComportamental from '@/components/cadeia-origem-comportamental'
import MetodoAwake from '@/components/metodo-awake'
import MatrizComportamental from '@/components/matriz-comportamental'
import Solucoes from '@/components/solucoes'
import SobreNakai from '@/components/sobre-nakai'
import ContatoSection from '@/components/contato-section'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <InteligenciaEvolutiva />
        <CadeiaOrigemComportamental />
        <MetodoAwake />
        <MatrizComportamental />
        <Solucoes />
        <SobreNakai />
        <ContatoSection />
      </main>
      <Footer />
    </>
  )
}

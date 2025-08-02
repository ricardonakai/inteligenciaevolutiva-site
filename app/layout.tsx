
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inteligência Evolutiva - Ricardo Nakai',
  description: 'Uma inteligência que nasce da travessia entre sobrevivência e essência. Descobra o método AWAKE e transforme sua realidade.',
  keywords: 'inteligência evolutiva, método AWAKE, desenvolvimento pessoal, consciência, evolução humana, Ricardo Nakai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

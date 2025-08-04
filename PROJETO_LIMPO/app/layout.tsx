
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inteligência Evolutiva | Ricardo Nakai',
  description: 'Portal oficial da Inteligência Evolutiva - Método AWAKE e Matriz Comportamental Nakai',
  keywords: 'inteligência evolutiva, método awake, matriz comportamental, ricardo nakai, desenvolvimento pessoal',
  authors: [{ name: 'Ricardo Nakai' }],
  openGraph: {
    title: 'Inteligência Evolutiva | Ricardo Nakai',
    description: 'Portal oficial da Inteligência Evolutiva - Método AWAKE e Matriz Comportamental Nakai',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}

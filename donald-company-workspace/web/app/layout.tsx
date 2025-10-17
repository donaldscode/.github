import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AbiSim Technologies - Eliminating Manufacturing Waste Through Causal AI',
  description: 'Revolutionary manufacturing optimization through WDBX causal AI and AbiSim digital twin technology. Achieve 23% scrap reduction and 18% energy savings.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm border-b border-secondary-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-primary-600">AbiSim</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#technology" className="text-secondary-600 hover:text-primary-600 transition-colors">Technology</a>
                <a href="#solutions" className="text-secondary-600 hover:text-primary-600 transition-colors">Solutions</a>
                <a href="#about" className="text-secondary-600 hover:text-primary-600 transition-colors">About</a>
                <a href="#contact" className="text-secondary-600 hover:text-primary-600 transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-secondary-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">AbiSim Technologies</h3>
              <p className="text-secondary-300 mb-4">Eliminating manufacturing waste through causal AI</p>
              <p className="text-secondary-400 text-sm">&copy; 2024 AbiSim Technologies. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
import { ReactNode } from 'react'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

interface MainLayoutProps {
  children?: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

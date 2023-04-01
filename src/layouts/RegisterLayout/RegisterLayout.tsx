import { ReactNode } from 'react'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

interface RegisterLayoutProps {
  children?: ReactNode
}

export default function RegisterLayout({ children }: RegisterLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

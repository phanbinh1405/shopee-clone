import { Link, useMatch } from 'react-router-dom'

function RegisterHeader() {
  const registerMatch = useMatch('/register')
  const isRegister = Boolean(registerMatch)
  return (
    <header className='py-5'>
      <div className='container'>
        <nav className=' flex items-end '>
          <Link to='/'>
            <img src='/logo.svg' alt='logo' width={160} height={52} />
          </Link>

          <div className='ml-5 text-xl lg:text-2xl'>{isRegister ? `Đăng ký` : 'Đăng nhập'}</div>
        </nav>
      </div>
    </header>
  )
}

export default RegisterHeader

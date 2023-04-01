import { Link } from 'react-router-dom'
import Popover from '../Popover'
import { useMutation } from '@tanstack/react-query'
import { logout } from 'src/apis/auth.api'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'

function Header() {
  const { setIsAuthenticated, isAuthenticated } = useContext(AppContext)
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setIsAuthenticated(false)
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }
  return (
    <div className='bg-gradient-to-b from-[#f53d2d] to-[#f63] pb-5 pt-2 text-white'>
      <div className='container'>
        <div className='flex justify-end'>
          <Popover
            as='span'
            className='flex cursor-pointer items-center py-1 hover:text-gray-300'
            renderPopover={
              <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
                <div className='px flex flex-col py-2 px-3'>
                  <button className='py-2 px-3 hover:text-orange'>Tiếng Việt</button>
                  <button className='py-2 px-3 hover:text-orange'>English</button>
                </div>
              </div>
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
              />
            </svg>
            <span className='mx-1'>Tiếng Việt</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
            </svg>
          </Popover>

          {!isAuthenticated ? (
            <div className='flex items-center'>
              <Link to='/register' className='mx-3 capitalize hover:text-white/70'>
                Đăng ký
              </Link>
              <div className='h-4 border-r-[1px] border-r-white/40' />
              <Link to='/login' className='mx-3 capitalize hover:text-white/70'>
                Đăng nhập
              </Link>
            </div>
          ) : (
            <Popover
              className='ml-6 flex cursor-pointer items-center py-1 hover:text-gray-300'
              renderPopover={
                <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
                  <Link to='/' className='block bg-white py-2 px-3 hover:bg-slate-100 hover:text-cyan-500'>
                    Tài khoản của tôi
                  </Link>
                  <Link to='/' className='block bg-white py-2 px-3 hover:bg-slate-100 hover:text-cyan-500'>
                    Đơn mua
                  </Link>
                  <div
                    className='block cursor-pointer bg-white py-2 px-3 hover:bg-slate-100 hover:text-cyan-500'
                    onClick={handleLogout}
                    role='presentation'
                  >
                    Đăng xuất
                  </div>
                </div>
              }
            >
              <div className='mr-2 h-5 w-5 flex-shrink-0'>
                <img
                  src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                  alt='avatar'
                  className='h-full w-full rounded-full object-cover'
                />
              </div>
              <div>Phan Van Binh</div>
            </Popover>
          )}
        </div>
        <div className='mt-4 grid grid-cols-12 items-end gap-4'>
          <Link to='/' className='col-span-2'>
            <img src='/logo-white.svg' alt='logo' width={160} height={52} />
          </Link>
          <form className='col-span-9'>
            <div className='flex rounded-sm bg-white p-1'>
              <input
                type='text'
                name='search'
                placeholder='Search your product'
                className='flex-grow border-none bg-transparent px-3 py-2 text-black outline-none'
              />

              <button className='flex-shrink-0 rounded-sm bg-orange py-2 px-6 hover:opacity-90'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className='col-span-1 justify-self-start'>
            <Popover
              renderPopover={
                <div className='relative max-w-[400px] rounded-sm border border-gray-200 bg-white text-sm shadow-md'>
                  <div className='p-2 capitalize text-gray-400'>Sản phẩm mới thêm</div>
                  <div className='p-2 hover:bg-slate-100'>
                    <div className='flex'>
                      <div className='flex-shrink-0'>
                        <img
                          src='https://down-vn.img.susercontent.com/file/af2b11ac117ca5eedf999409fa493139_tn'
                          alt='product'
                          className='h-[42px] w-[42px] object-cover'
                        />
                      </div>
                      <div className='ml-2 flex-grow overflow-hidden'>
                        <div className='truncate'>Quần kaki nam nữ dài ống suông baggy DAVUBA QD002</div>
                      </div>
                      <div className='ml-4 flex-shrink-0'>
                        <span className='text-orange'>đ199.000</span>
                      </div>
                    </div>
                  </div>
                  <div className='p-2 hover:bg-slate-100'>
                    <div className='flex'>
                      <div className='flex-shrink-0'>
                        <img
                          src='https://down-vn.img.susercontent.com/file/af2b11ac117ca5eedf999409fa493139_tn'
                          alt='product'
                          className='h-[42px] w-[42px] object-cover'
                        />
                      </div>
                      <div className='ml-2 flex-grow overflow-hidden'>
                        <div className='truncate'>Quần kaki nam nữ dài ống suông baggy DAVUBA QD002</div>
                      </div>
                      <div className='ml-4 flex-shrink-0'>
                        <span className='text-orange'>đ199.000</span>
                      </div>
                    </div>
                  </div>
                  <div className='p-2 hover:bg-slate-100'>
                    <div className='flex'>
                      <div className='flex-shrink-0'>
                        <img
                          src='https://down-vn.img.susercontent.com/file/af2b11ac117ca5eedf999409fa493139_tn'
                          alt='product'
                          className='h-[42px] w-[42px] object-cover'
                        />
                      </div>
                      <div className='ml-2 flex-grow overflow-hidden'>
                        <div className='truncate'>Quần kaki nam nữ dài ống suông baggy DAVUBA QD002</div>
                      </div>
                      <div className='ml-4 flex-shrink-0'>
                        <span className='text-orange'>đ199.000</span>
                      </div>
                    </div>
                  </div>
                  <div className='p-2 hover:bg-slate-100'>
                    <div className='flex'>
                      <div className='flex-shrink-0'>
                        <img
                          src='https://down-vn.img.susercontent.com/file/af2b11ac117ca5eedf999409fa493139_tn'
                          alt='product'
                          className='h-[42px] w-[42px] object-cover'
                        />
                      </div>
                      <div className='ml-2 flex-grow overflow-hidden'>
                        <div className='truncate'>Quần kaki nam nữ dài ống suông baggy DAVUBA QD002</div>
                      </div>
                      <div className='ml-4 flex-shrink-0'>
                        <span className='text-orange'>đ199.000</span>
                      </div>
                    </div>
                  </div>

                  <div className='mt-4 flex items-center justify-between p-2'>
                    <div className='text-xs capitalize text-gray-400'>Thêm hàng vào giỏ</div>
                    <button className='captilize rounded-sm bg-orange px-4 py-2 text-white hover:bg-opacity-80'>
                      Xem giỏ hàng
                    </button>
                  </div>
                </div>
              }
              className='ml-6 flex cursor-pointer items-center py-1 hover:text-gray-300'
            >
              <Link to='#' className=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-8 w-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                  />
                </svg>
              </Link>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

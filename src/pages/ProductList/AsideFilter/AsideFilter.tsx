import { Link } from 'react-router-dom'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import customPath from 'src/contants/path'

function AsideFilter() {
  return (
    <div className=' py-4 '>
      <Link to={customPath.home} className='flex items-center font-bold'>
        <svg viewBox='0 0 12 10' className='mr-3 h-4 w-3 fill-current'>
          <g fillRule='evenodd' stroke='none' strokeWidth='1'>
            <g transform='translate(-373 -208)'>
              <g transform='translate(155 191)'>
                <g transform='translate(218 17)'>
                  <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z'></path>
                  <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z'></path>
                  <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z'></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        Tất cả danh mục
      </Link>
      <div className='my-4 h-[1px] bg-gray-300' />
      <div>
        <ul>
          <li className='py-2 pl-2'>
            <Link to={customPath.home} className='relative px-2 font-semibold text-orange'>
              <svg viewBox='0 0 4 7' className='absolute top-1 left-[-10px] h-2 w-2 fill-orange'>
                <polygon points='4 3.5 0 0 0 7' />
              </svg>
              Thời trang nam
            </Link>
          </li>
          <li className='py-2 pl-2'>
            <Link to={customPath.home} className='f relative px-2'>
              Điện thoại
            </Link>
          </li>
        </ul>

        <Link to={customPath.home} className='mt-4 flex items-center font-bold uppercase'>
          <svg
            enableBackground='new 0 0 15 15'
            viewBox='0 0 15 15'
            x={0}
            y={0}
            className='mr-3 h-4 w-3 fill-current stroke-current'
          >
            <g>
              <polyline
                fill='none'
                points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit={10}
              />
            </g>
          </svg>
          Bộ lọc tìm kiếm
        </Link>
        <div className='my-4 h-[1px] bg-gray-300' />
        <div className='my-5'>
          <div>Khoản giá</div>
          <form className='mt-2'>
            <div className='flex items-start'>
              <Input
                type='text'
                className='grow'
                name='from'
                placeholder='đ Từ'
                classNameInput='w-full rounded-sm border border-gray-300 p-1 outline-none focus:border-gray-500 focus:shadow-sm'
              />
              <div className='mx-2 mt-2 shrink-0'>-</div>
              <Input
                type='text'
                className='grow'
                name='from'
                placeholder='đ Đến'
                classNameInput='w-full rounded-sm border border-gray-300 p-1 outline-none focus:border-gray-500 focus:shadow-sm'
              />
            </div>
            <Button className='flex w-full items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:opacity-90'>
              Áp dụng
            </Button>
          </form>
        </div>
        <div className='my-4 h-[1px] bg-gray-300' />
        <div className='text-sm'>Đánh giá</div>
        <ul className='my-3'>
          <li className='py-1 pl-2'>
            <Link to={customPath.home} className='flex items-center text-sm'>
              {Array(5)
                .fill(0)
                .map((_, index) => {
                  return (
                    <svg key={index} viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
                      <defs>
                        <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                          <stop offset={0} stopColor='#ffca11' />
                          <stop offset={1} stopColor='#ffad27' />
                        </linearGradient>
                        <polygon
                          id='ratingStar'
                          points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                        />
                      </defs>
                      <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                        <g transform='translate(-876 -1270)'>
                          <g transform='translate(155 992)'>
                            <g transform='translate(600 29)'>
                              <g transform='translate(10 239)'>
                                <g transform='translate(101 10)'>
                                  <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  )
                })}
              <span>Trờ lên</span>
            </Link>
          </li>
          <li className='py-1 pl-2'>
            <Link to={customPath.home} className='flex items-center text-sm'>
              {Array(5)
                .fill(0)
                .map((_, index) => {
                  return (
                    <svg key={index} viewBox='0 0 9.5 8' className='mr-1 h-4 w-4'>
                      <defs>
                        <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                          <stop offset={0} stopColor='#ffca11' />
                          <stop offset={1} stopColor='#ffad27' />
                        </linearGradient>
                        <polygon
                          id='ratingStar'
                          points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                        />
                      </defs>
                      <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                        <g transform='translate(-876 -1270)'>
                          <g transform='translate(155 992)'>
                            <g transform='translate(600 29)'>
                              <g transform='translate(10 239)'>
                                <g transform='translate(101 10)'>
                                  <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  )
                })}
              <span>Trờ lên</span>
            </Link>
          </li>
        </ul>
        <div className='my-4 h-[1px] bg-gray-300' />
        <Button className='flex w-full items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:opacity-90'>
          Xoá tất cả
        </Button>
      </div>
    </div>
  )
}

export default AsideFilter

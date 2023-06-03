import { Link } from 'react-router-dom'
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
      <div className='my-4 h-[1px] bg-gray-300'>
        <ul>
          <li className='py-2 pl-2'>
            <Link to={customPath.home} className='relative px-2 font-semibold text-orange'>
              <svg viewBox='0 0 4 7' className='absolute top-1 left-[-10px] h-2 w-2 fill-orange'>
                <polygon points='4 3.5 0 0 0 7' />
              </svg>
              Thời trang nam
            </Link>
            <li className='py-2 pl-2'>
              <Link to={customPath.home} className='f relative px-2'>
                Điện thoại
              </Link>
            </li>
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
            <div className='flex items-start'></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AsideFilter

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FormDataSchema, schema } from 'src/utils/rules'
import { Input } from '../../components/Input/Input'

// type cho form data dựa trên các field truyền vào

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataSchema>({ resolver: yupResolver(schema) })

  //  Nhập 2 function, 1 chạy khi valid, 1 chạy khi invalid
  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    }
    // (data) => {
    //   const password = getValues('password')
    //   console.log(password)
    // }
  )

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12  lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                type={'email'}
                name='email'
                register={register}
                className='mt-8'
                placeholder='Email'
                errorMessage={errors.email?.message}
              />
              <Input
                type='password'
                name='password'
                register={register}
                className='mt-3'
                errorMessage={errors.password?.message}
                placeholder='Password'
              />{' '}
              <Input
                type='password'
                name='confirm_password'
                register={register}
                className='mt-3'
                errorMessage={errors.confirm_password?.message}
                placeholder='Confirm password'
              />
              <div className='mt-3'>
                <button
                  className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'
                  type='submit'
                >
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex justify-center'>
                  <span className='text-slate-400'>Bạn đã có tài khoản?</span>

                  <Link to='/login' className='ml-1 text-red-400'>
                    Đăng Nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { login } from 'src/apis/auth.api'
import { Input } from 'src/components/Input/Input'
import { AppContext } from 'src/contexts/app.context'
import { SuccessResponse } from 'src/types/utils.type'
import { loginSchema, LoginSchema } from 'src/utils/rules'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'

export default function Login() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<LoginSchema>({ resolver: yupResolver(loginSchema) })

  const loginAccount = useMutation({
    mutationFn: (body: LoginSchema) => login(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginAccount.mutate(data, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<SuccessResponse<LoginSchema>>(error)) {
          const loginError = error.response?.data.data
          if (loginError) {
            Object.keys(loginError).forEach((key) => {
              setError(key as keyof LoginSchema, {
                message: loginError[key as keyof LoginSchema]
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12  lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng nhập </div>
              <Input
                type='email'
                name='email'
                register={register}
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              <Input
                type='password'
                name='password'
                register={register}
                className='mt-3'
                errorMessage={errors.password?.message}
                placeholder='Password'
              />
              <div className='mt-3'>
                <button
                  className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'
                  type='submit'
                >
                  Đăng Nhập
                </button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex justify-center'>
                  <span className='text-slate-400'>Bạn chưa có tài khoản?</span>

                  <Link to='/register' className='ml-1 text-red-400'>
                    Đăng Ký
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

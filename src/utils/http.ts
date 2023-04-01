import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import { AuthResponse } from 'src/types/auth.type'
import { clearAccessTokenFromLS, getAccessTokenFromLS, saveAccesTokenToLocalStorage } from './auth'

class Http {
  instance: AxiosInstance
  // Tạo access token để việc đọc dữ liệu nhanh hơn do được lưu trên ram.
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()

    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // Add response intercepter
    this.instance.interceptors.response.use(
      // when fulfilled
      (response) => {
        const { url } = response.config

        if (url === '/login' || url === '/register') {
          this.accessToken = (response.data as AuthResponse).data.access_token

          saveAccesTokenToLocalStorage(this.accessToken)
        }
        if (url === '/logout') {
          this.accessToken = ''
          clearAccessTokenFromLS()
        }
        return response
      },
      // when error
      (error: AxiosError) => {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http

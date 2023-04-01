import { User } from './user.type'
import { ResponseApi } from './utils.type'

export type AuthResponse = ResponseApi<{
  acccess_token: string
  expires: string
  user: User
}>

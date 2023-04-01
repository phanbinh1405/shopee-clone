export const saveAccesTokenToLocalStorage = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

export const clearAccessTokenFromLS = () => {
  localStorage.removeItem('access_token')
}

export const getAccessTokenFromLS = () => {
  const access_token = localStorage.getItem('access_token')
  return access_token && access_token !== 'undefined' ? access_token : ''
}

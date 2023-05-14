export const loginWithUserAndPassword = ({ userName, password }: { userName: string, password: string }) => {
  const resp = localStorage.getItem('user')
  if (resp) {
    const user = JSON.parse(resp)
    if (user.userName === userName && user.password === password) {
      return user      
    } else {
      return null
    }
  }
}

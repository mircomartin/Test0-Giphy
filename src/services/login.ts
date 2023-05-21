export const loginWithUserAndPassword = ({ userName, password }: { userName: string, password: string }) => {
  const resp = localStorage.getItem('users')
  if (resp) {
    const user = JSON.parse(resp)
    const usersFiltered = user.some((user: any) => user.userName === userName && user.password === password)
    if (usersFiltered) {
      return user
    } else {
      return null
    }
  }
}

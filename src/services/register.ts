export const registerUserToApi = ({ userName, password }: { userName: string, password: string }) => {
  const resp = localStorage.getItem('users')
  if (resp) {
    const users = JSON.parse(resp)
    const usersFiltered = users.some((user: any) => user.userName === userName)
    
    if (usersFiltered) {
      return null
    } else {
      const newUsers = localStorage.setItem('users', JSON.stringify([...users, { userName, password }]))
      return newUsers
    }
  } else {
    return localStorage.setItem('users', JSON.stringify([{ userName, password }]))
  }
}

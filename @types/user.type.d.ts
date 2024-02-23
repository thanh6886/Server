interface User {
  email: string
  password: string
  name: string
  address: string
  phone: string
  roles: string[]
  date_of_birth: string
  avatar?: string
  [key: string]: any
}

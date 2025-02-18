export interface IUserEntity {
  id: number
  email: string
  gender: string
  firstName: string
  lastName: string
}

export interface IUserList {
  users: IUserEntity[]
  skip: number
  total: number
}

export interface IUserEntity {
  id: number
  email: string
  gender: string
  firstName: string
  lastName: string
}

export interface ILoginUserParams {
  username: string
  password: string
  expiresInMins?: number
}

export interface ILogRes {
  image: string
  accessToken: string
  refreshToken: string
}

export type LoginRes = ILogRes & IUserEntity

export interface IUserList {
  users: IUserEntity[]
  skip: number
  total: number
}

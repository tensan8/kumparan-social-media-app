import { UserModel } from '../../../domain/models/User'

export interface PostDTO {
  id: number
  userId: Pick<UserModel, 'id'>
  title: string
  body: string
}

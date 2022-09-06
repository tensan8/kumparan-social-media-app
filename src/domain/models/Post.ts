import { BaseModel } from './baseModel'
import { UserModel } from './User'

interface Post {
  userId: Pick<UserModel, 'id'>
  title: string
  body: string
}

export class PostModel extends BaseModel {
  userId
  title
  body

  constructor (post: Post, id: number) {
    super(id)

    this.userId = post.userId
    this.title = post.title
    this.body = post.body
  }
}

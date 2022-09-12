import { BaseModel } from './baseModel'

interface Post {
  userId: number
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

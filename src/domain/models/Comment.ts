import { BaseModel } from './baseModel'

interface Comment {
  postId: number
  name: string
  email: string
  body: string
}

export class CommentModel extends BaseModel {
  postId
  name
  email
  body

  constructor (comment: Comment, id: number) {
    super(id)

    this.postId = comment.postId
    this.name = comment.name
    this.email = comment.email
    this.body = comment.body
  }
}

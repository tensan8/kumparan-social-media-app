
interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export class PostModel {
  id
  title
  body
  userId

  constructor (post: Post) {
    this.id = post.id
    this.title = post.title
    this.body = post.body
    this.userId = post.userId
  }
}

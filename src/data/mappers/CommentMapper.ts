import { CommentModel } from '../../Domain/Models/comment'
import { CommentDTO } from '../Sources/Dtos/commentDTO'

export const mapCommentModel = (commentDTO: CommentDTO): CommentModel => {
  return (new CommentModel({
    postId: commentDTO.postId,
    name: commentDTO.name,
    email: commentDTO.email,
    body: commentDTO.body
  }, commentDTO.id))
}

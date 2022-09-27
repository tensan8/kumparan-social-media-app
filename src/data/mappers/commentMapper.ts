import { CommentModel } from '../../domain/models/comment'
import { CommentDTO } from '../sources/dtos/commentDTO'

export const mapCommentModel = (commentDTO: CommentDTO): CommentModel => {
  return (new CommentModel({
    postId: commentDTO.postId,
    name: commentDTO.name,
    email: commentDTO.email,
    body: commentDTO.body
  }, commentDTO.id))
}

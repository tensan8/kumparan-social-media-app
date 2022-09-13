import { CommentModel } from './../../domain/models/Comment'
import { CommentDTO } from './../sources/dtos/CommentDTO'

export const mapCommentModel = (commentDTO: CommentDTO): CommentModel => {
  return (new CommentModel({
    postId: commentDTO.postId,
    name: commentDTO.name,
    email: commentDTO.email,
    body: commentDTO.body
  }, commentDTO.id))
}

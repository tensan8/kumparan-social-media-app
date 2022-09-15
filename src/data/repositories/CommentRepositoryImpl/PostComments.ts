import { mapCommentModel } from './../../mappers/CommentMapper'
import { CommentModel } from './../../../domain/models/Comment'
import * as CommentRepositories from '../../../domain/repositories/CommentRepositories'
import * as CommentQueries from '../../sources/CommentDataSource'
import { CommentDTO } from '../../sources/dtos/CommentDTO'
import { Result } from '../../../domain/vo/Result'

export const GetPostComments = (postId: number): CommentRepositories.PostComments => {
  const result = new Result<CommentModel[]>()
  const { data } = CommentQueries.PostCommentQuery(postId)

  const retrievePostComments = (data != null)
    ? data.map((comment: CommentDTO) => mapCommentModel(comment))
    : []

  result.setData(retrievePostComments)

  return { result }
}

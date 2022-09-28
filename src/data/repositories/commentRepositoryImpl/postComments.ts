import { mapCommentModel } from '../../mappers/commentMapper'
import { CommentModel } from '../../../domain/models/comment'
import * as CommentRepositories from '../../../domain/repositories/commentRepositories'
import * as CommentQueries from '../../sources/commentDataSource'
import { CommentDTO } from '../../sources/dtos/commentDTO'
import { Result } from '../../../domain/vo/result'

export const GetPostComments = (postId: number): CommentRepositories.PostComments => {
  const result = new Result<CommentModel[]>()
  const { data } = CommentQueries.PostCommentQuery(postId)

  const retrievePostComments = (data != null)
    ? data.map((comment: CommentDTO) => mapCommentModel(comment))
    : []

  result.setData(retrievePostComments)

  return { result }
}

import { CommentModel } from '../../../Domain/Models/comment'
import * as CommentRepositories from '../../../Domain/Repositories/commentRepositories'
import { Result } from '../../../Domain/Vo/result'
import { mapCommentModel } from '../../Mappers/commentMapper'
import * as CommentQueries from '../../Sources/CommentDataSource'
import { CommentDTO } from '../../Sources/Dtos/commentDTO'

export const GetPostComments = (postId: number): CommentRepositories.PostComments => {
  const result = new Result<CommentModel[]>()
  const { data } = CommentQueries.PostCommentQuery(postId)

  const retrievePostComments = (data != null)
    ? data.map((comment: CommentDTO) => mapCommentModel(comment))
    : []

  result.setData(retrievePostComments)

  return { result }
}

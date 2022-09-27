import { CommentModel } from '../../../Domain/Models/comment'
import * as CommentRepositories from '../../../Domain/Repositories/commentRepositories'
import { Result } from '../../../Domain/Vo/result'
import { mapCommentModel } from '../../Mappers/commentMapper'
import * as CommentQueries from '../../Sources/CommentDataSource'
import { CommentDTO } from '../../Sources/Dtos/commentDTO'

export const GetAllComments = (): CommentRepositories.AllComments => {
  const result = new Result<CommentModel[]>()
  const { data } = CommentQueries.AllCommentsQuery()

  const retrieveAllComments = (data != null)
    ? data.map((comment: CommentDTO) => mapCommentModel(comment))
    : []

  result.setData(retrieveAllComments)

  return { result }
}

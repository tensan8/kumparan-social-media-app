import { mapCommentModel } from '../../mappers/commentMapper'
import { CommentDTO } from '../../sources/dtos/commentDTO'
import { CommentModel } from '../../../domain/models/comment'
import * as CommentRepositories from '../../../domain/repositories/commentRepositories'
import * as CommentQueries from '../../sources/commentDataSource'
import { Result } from '../../../domain/vo/result'

export const GetAllComments = (): CommentRepositories.AllComments => {
  const result = new Result<CommentModel[]>()
  const { data } = CommentQueries.AllCommentsQuery()

  const retrieveAllComments = (data != null)
    ? data.map((comment: CommentDTO) => mapCommentModel(comment))
    : []

  result.setData(retrieveAllComments)

  return { result }
}

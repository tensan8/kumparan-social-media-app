import { mapCommentModel } from './../../mappers/CommentMapper'
import { CommentDTO } from './../../sources/dtos/CommentDTO'
import { CommentModel } from '../../../domain/models/Comment'
import * as CommentRepositories from '../../../domain/repositories/CommentRepositories'
import * as CommentQueries from '../../../data/sources/CommentDataSource'
import { Result } from '../../../domain/vo/Result'

export const GetAllComments = (): CommentRepositories.AllComments => {
  const result = new Result<CommentModel[]>()
  const { data } = CommentQueries.AllCommentsQuery()

  const retrieveAllComments = (data != null)
    ? data.map((comment: CommentDTO) => mapCommentModel(comment))
    : []

  result.setData(retrieveAllComments)

  return { result }
}

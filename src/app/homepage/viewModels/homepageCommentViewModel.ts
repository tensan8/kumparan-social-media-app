import { GetAllComments } from '../../../data/repositories/commentRepositoryImpl/comments'
import { CommentModel } from '../../../domain/models/comment'

interface HomepageCommentViewModel {
  allComments: CommentModel[] | null
}

export const useHomepageCommentViewModel = (): HomepageCommentViewModel => {
  const { result } = GetAllComments()

  return {
    allComments: result.data
  }
}

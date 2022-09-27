import { GetAllComments } from '../../../Data/Repositories/CommentRepositoryImpl/comments'
import { CommentModel } from '../../../Domain/Models/comment'

interface HomepageCommentViewModel {
  allComments: CommentModel[] | null
}

export const useHomepageCommentViewModel = (): HomepageCommentViewModel => {
  const { result } = GetAllComments()

  return {
    allComments: result.data
  }
}

import { GetAllComments } from '../../../Data/Repositories/CommentRepositoryImpl/Comments'
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

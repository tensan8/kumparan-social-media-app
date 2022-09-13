import { GetAllComments } from './../../../data/repositories/CommentRepositoryImpl/Comments'
import { CommentModel } from './../../../domain/models/Comment'

interface HomepageCommentViewModel {
  allComments: CommentModel[] | null
}

export const useHomepageCommentViewModel = (): HomepageCommentViewModel => {
  const { result } = GetAllComments()

  return {
    allComments: result.data
  }
}

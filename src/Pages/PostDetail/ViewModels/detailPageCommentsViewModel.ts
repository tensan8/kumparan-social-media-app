import { GetPostComments } from '../../../Data/Repositories/CommentRepositoryImpl/postComments'
import { CommentModel } from '../../../Domain/Models/comment'

interface DetailPageCommentsViewModel {
  commentsList: CommentModel[] | null
}

export const useDetailPageCommentsViewModel = (postId: number): DetailPageCommentsViewModel => {
  const { result } = GetPostComments(postId)

  return {
    commentsList: result.data
  }
}
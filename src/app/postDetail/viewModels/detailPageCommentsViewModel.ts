import { GetPostComments } from '../../../data/repositories/commentRepositoryImpl/postComments'
import { CommentModel } from '../../../domain/models/comment'

interface DetailPageCommentsViewModel {
  commentsList: CommentModel[] | null
}

export const useDetailPageCommentsViewModel = (postId: number): DetailPageCommentsViewModel => {
  const { result } = GetPostComments(postId)

  return {
    commentsList: result.data
  }
}

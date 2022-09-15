import { GetPostComments } from './../../../data/repositories/CommentRepositoryImpl/PostComments'
import { CommentModel } from './../../../domain/models/Comment'

interface DetailPageCommentsViewModel {
  commentsList: CommentModel[] | null
}

export const useDetailPageCommentsViewModel = (postId: number): DetailPageCommentsViewModel => {
  const { result } = GetPostComments(postId)

  return {
    commentsList: result.data
  }
}

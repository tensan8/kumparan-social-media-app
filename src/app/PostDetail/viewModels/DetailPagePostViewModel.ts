import { GetSinglePost } from '../../../data/repositories/postRepositoryImpl/singlePost'
import { PostModel } from '../../../domain/models/post'

interface DetailPagePostViewModel {
  post: PostModel | null
}

export const useDetailPagePostViewModel = (postId: number): DetailPagePostViewModel => {
  const { result } = GetSinglePost(postId)

  return {
    post: result.data
  }
}

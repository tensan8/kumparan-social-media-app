import { GetSinglePost } from '../../../Data/Repositories/PostRepositoryImpl/singlePost'
import { PostModel } from '../../../Domain/Models/post'

interface DetailPagePostViewModel {
  post: PostModel | null
}

export const useDetailPagePostViewModel = (postId: number): DetailPagePostViewModel => {
  const { result } = GetSinglePost(postId)

  return {
    post: result.data
  }
}
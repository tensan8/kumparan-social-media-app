import { GetSinglePost } from './../../../data/repositories/PostRepositoryImpl/SinglePost'
import { PostModel } from './../../../domain/models/Post'

interface DetailPagePostViewModel {
  post: PostModel | null
}

export const useDetailPagePostViewModel = (postId: number): DetailPagePostViewModel => {
  const { result } = GetSinglePost(postId)

  return {
    post: result.data
  }
}

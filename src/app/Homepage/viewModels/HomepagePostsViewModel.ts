import { GetAllPosts } from '../../../data/repositories/PostRepositoryImpl/Post'
import { PostModel } from '../../../domain/models/Post'

interface HomepagePostsViewModel {
  allPosts: PostModel[] | null
}

export const useHomepagePostsViewModel = (): HomepagePostsViewModel => {
  const { result } = GetAllPosts()

  return {
    allPosts: result.data
  }
}

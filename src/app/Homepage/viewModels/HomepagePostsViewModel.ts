import { GetAllPosts } from '../../../data/repositories/postRepositoryImpl/post'
import { PostModel } from '../../../domain/models/post'

interface HomepagePostsViewModel {
  allPosts: PostModel[] | null
}

export const useHomepagePostsViewModel = (): HomepagePostsViewModel => {
  const { result } = GetAllPosts()

  return {
    allPosts: result.data
  }
}

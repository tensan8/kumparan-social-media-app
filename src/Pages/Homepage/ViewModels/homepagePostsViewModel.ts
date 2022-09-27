import { GetAllPosts } from '../../../Data/Repositories/PostRepositoryImpl/post'
import { PostModel } from '../../../Domain/Models/post'

interface HomepagePostsViewModel {
  allPosts: PostModel[] | null
}

export const useHomepagePostsViewModel = (): HomepagePostsViewModel => {
  const { result } = GetAllPosts()

  return {
    allPosts: result.data
  }
}
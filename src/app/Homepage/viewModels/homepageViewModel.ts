import { GetAllPosts } from '../../../data/repositories/PostRepositoryImpl/Post'
import { PostModel } from '../../../domain/models/Post'

interface HomepageViewModel {
  allPosts: PostModel[] | null
}

export const useHomepageViewModel = (): HomepageViewModel => {
  const { result } = GetAllPosts()

  // console.log(result)

  return {
    allPosts: result.data
  }
}

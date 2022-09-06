import { useDispatch, useSelector } from 'react-redux'
import { PostModel } from '../../domain/models/PostModel'
import { AllPosts } from '../../domain/repositories/PostRepositories'
import { Result } from '../../domain/vo/Result'
import { mapToPostModel } from '../mappers/PostMapper'
import { PostDto } from '../sources/dtos/PostDto'
import { getAllPosts } from '../sources/getAllPosts'

export const usePosts = (): AllPosts => {
  const result = new Result<PostModel[]>()
  const dispatch = useDispatch()
  const posts = useSelector((state: any) => {
    if (state.postReducer?.posts !== undefined) {
      return state.postReducer.posts.map((post: PostDto) => mapToPostModel(post))
    } else return []
  })

  const getSpaces = async (): Promise<void> => {
    result.setLoading(true)
    // @ts-expect-error
    await dispatch(getAllPosts())
    result.setLoading(false)
  }

  result.setData(posts)

  return {
    result,
    getSpaces
  }
}

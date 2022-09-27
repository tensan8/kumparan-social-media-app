import { PostDTO } from '../../Sources/Dtos/postDTO'
import { mapPostModel } from '../../Mappers/postMapper'
import { PostModel } from '../../../Domain/Models/post'
import * as PostRepository from '../../../Domain/Repositories/postRepositories'
import { Result } from '../../../Domain/Vo/result'
import * as PostDataSource from '../../Sources/PostDataSource'

export const GetAllPosts = (): PostRepository.AllPosts => {
  const result = new Result<PostModel[]>()
  const { data } = PostDataSource.AllPostQuery()

  const retrieveAllPosts = (data != null)
    ? data.map((data: PostDTO) => mapPostModel(data))
    : []

  result.setData(retrieveAllPosts)

  return { result }
}

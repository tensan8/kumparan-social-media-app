import { PostDTO } from '../../sources/dtos/postDTO'
import { mapPostModel } from '../../mappers/postMapper'
import { PostModel } from '../../../domain/models/post'
import * as PostRepository from '../../../domain/repositories/postRepositories'
import { Result } from '../../../domain/vo/result'
import * as PostDataSource from '../../sources/postDataSource'

export const GetAllPosts = (): PostRepository.AllPosts => {
  const result = new Result<PostModel[]>()
  const { data } = PostDataSource.AllPostQuery()

  console.log(data !== null && data !== undefined ? data[1] : {})

  const retrieveAllPosts = (data != null)
    ? data.map((data: PostDTO) => mapPostModel(data))
    : []

  result.setData(retrieveAllPosts)

  return { result }
}

import { PostDTO } from './../../sources/dtos/PostDTO'
import { mapPostModel } from './../../mappers/PostMapper'
import { PostModel } from '../../../domain/models/Post'
import * as PostRepository from '../../../domain/repositories/PostRepositories'
import { Result } from '../../../domain/vo/Result'
import * as PostDataSource from '../../sources/PostDataSource'

export const GetAllPosts = (): PostRepository.AllPosts => {
  const result = new Result<PostModel[]>()
  const { data } = PostDataSource.AllPostQuery()

  const retrieveAllPosts = (data != null)
    ? data.map((data: PostDTO) => mapPostModel(data))
    : []

  result.setData(retrieveAllPosts)

  return { result }
}

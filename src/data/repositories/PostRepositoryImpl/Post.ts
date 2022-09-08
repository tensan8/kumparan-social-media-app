import { AllPostQuery } from './../../sources/PostDataSource/PostQuery'
import { PostModel } from '../../../domain/models/Post'
import * as PostRepository from '../../../domain/repositories/PostRepositories'
import { Result } from '../../../domain/vo/Result'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as PostDataSource from '../../sources/PostDataSource'

export const GetAllPosts = (): PostRepository.AllPosts => {
  const result = new Result<PostModel[]>()

  const getAllPost = async (): Promise<any> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const res = await AllPostQuery()
    result.setData(res.data)
  }

  console.log(result)

  return {
    result,
    getAllPost
  }
}

import { AllPostQuery } from './../../sources/PostDataSource/PostQuery'
import { PostModel } from '../../../domain/models/Post'
import * as PostRepository from '../../../domain/repositories/PostRepositories'
import { Result } from '../../../domain/vo/Result'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserModel } from '../../../domain/models/User'

export const GetAllPosts = (): PostRepository.AllPosts => {
  const result = new Result<PostModel[]>()
  const { data } = AllPostQuery()

  const posts = (data != null)
    ? data.map((post) => new PostModel({
      userId: post.userId as unknown as Pick<UserModel, 'id'>,
      title: post.title,
      body: post.body
    }, post.id))
    : []
  result.setData(posts)

  /** This function no longer needed */
  const getAllPost = async (): Promise<any> => {
  }

  return {
    result,
    getAllPost
  }
}

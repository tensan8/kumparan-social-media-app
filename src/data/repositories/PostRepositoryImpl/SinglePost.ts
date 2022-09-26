import { mapPostModel } from './../../mappers/PostMapper'
import { PostModel } from './../../../domain/models/Post'
import * as PostRepositories from '../../../domain/repositories/PostRepositories'
import * as PostQueries from '../../sources/PostDataSource'
import { Result } from '../../../domain/vo/Result'

export const GetSinglePost = (postId: number): PostRepositories.SinglePost => {
  const result = new Result<PostModel>()
  const { data } = PostQueries.SinglePostQuery(postId)

  if (data != null) {
    result.setData(mapPostModel(data))
  }

  return { result }
}

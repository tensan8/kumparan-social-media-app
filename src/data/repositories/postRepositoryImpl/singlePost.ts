import { mapPostModel } from '../../mappers/postMapper'
import { PostModel } from '../../../domain/models/post'
import * as PostRepositories from '../../../domain/repositories/postRepositories'
import * as PostQueries from '../../sources/postDataSource'
import { Result } from '../../../domain/vo/result'

export const GetSinglePost = (postId: number): PostRepositories.SinglePost => {
  const result = new Result<PostModel>()
  const { data } = PostQueries.SinglePostQuery(postId)

  if (data != null) {
    result.setData(mapPostModel(data))
  }

  return { result }
}

import { mapPostModel } from '../../Mappers/postMapper'
import { PostModel } from '../../../Domain/Models/post'
import * as PostRepositories from '../../../Domain/Repositories/postRepositories'
import * as PostQueries from '../../Sources/PostDataSource'
import { Result } from '../../../Domain/Vo/result'

export const GetSinglePost = (postId: number): PostRepositories.SinglePost => {
  const result = new Result<PostModel>()
  const { data } = PostQueries.SinglePostQuery(postId)

  if (data != null) {
    result.setData(mapPostModel(data))
  }

  return { result }
}

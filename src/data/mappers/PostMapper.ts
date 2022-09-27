import { PostModel } from '../../Domain/Models/post'
import { PostDTO } from '../Sources/Dtos/postDTO'

export const mapPostModel = (postDTO: PostDTO): PostModel => {
  return (new PostModel({
    userId: postDTO.userId,
    title: postDTO.title,
    body: postDTO.body
  }, postDTO.id))
}

import { PostDTO } from '../sources/dtos/postDTO'
import { PostModel } from '../../domain/models/post'

export const mapPostModel = (postDTO: PostDTO): PostModel => {
  return (new PostModel({
    userId: postDTO.userId,
    title: postDTO.title,
    body: postDTO.body
  }, postDTO.id))
}

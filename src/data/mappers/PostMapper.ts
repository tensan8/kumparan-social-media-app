import { PostDTO } from './../sources/dtos/PostDTO'
import { PostModel } from '../../domain/models/Post'

export const mapPostModel = (postDTO: PostDTO): PostModel => {
  return (new PostModel({
    userId: postDTO.userId,
    title: postDTO.title,
    body: postDTO.body
  }, postDTO.id))
}

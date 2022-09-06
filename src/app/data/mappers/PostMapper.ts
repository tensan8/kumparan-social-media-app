import { PostModel } from '../../domain/models/PostModel'
import { PostDto } from '../sources/dtos/PostDto'

export const mapToPostModel = (postDto: PostDto): PostModel =>
  new PostModel({
    id: postDto.id,
    body: postDto.body,
    title: postDto.title,
    userId: postDto.userId
  })

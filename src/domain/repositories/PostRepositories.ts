import { BaseRepository } from './BaseRepository'
import { PostModel } from '../models/Post'
import { Result } from './../vo/Result'

export type PostResult = Result<PostModel[]>

export interface AllPosts extends BaseRepository<PostResult> {
  getAllPost: () => Promise<any>
}

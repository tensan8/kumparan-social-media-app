import { PostModel } from '../models/PostModel'
import { Result } from '../vo/Result'
import { BaseRepository } from './BaseRepository'

export interface AllPosts extends BaseRepository<Result<PostModel[]>> {
  getSpaces: () => Promise<void>
}

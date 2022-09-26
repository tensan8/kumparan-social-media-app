import { BaseRepository } from './baseRepository'
import { PostModel } from '../models/post'
import { Result } from '../vo/result'

export type PostResult = Result<PostModel[]>

export type SinglePostResult = Result<PostModel>

export interface AllPosts extends BaseRepository<PostResult> { }

export interface SinglePost extends BaseRepository<SinglePostResult> { }

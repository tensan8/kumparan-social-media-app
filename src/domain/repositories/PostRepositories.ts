import { BaseRepository } from './baseRepository'
import { PostModel } from '../Models/post'
import { Result } from '../Vo/result'

export type PostResult = Result<PostModel[]>

export type SinglePostResult = Result<PostModel>

export interface AllPosts extends BaseRepository<PostResult> { }

export interface SinglePost extends BaseRepository<SinglePostResult> { }

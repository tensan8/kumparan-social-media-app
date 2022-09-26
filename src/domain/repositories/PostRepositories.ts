import { BaseRepository } from './BaseRepository'
import { PostModel } from '../models/Post'
import { Result } from './../vo/Result'

export type PostResult = Result<PostModel[]>

export type SinglePostResult = Result<PostModel>

export interface AllPosts extends BaseRepository<PostResult> { }

export interface SinglePost extends BaseRepository<SinglePostResult> { }

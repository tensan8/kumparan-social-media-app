import { CommentModel } from '../models/comment'
import { Result } from '../vo/result'
import { BaseRepository } from './baseRepository'

export type CommentResult = Result<CommentModel[]>

export interface AllComments extends BaseRepository<CommentResult> { }

export interface PostComments extends BaseRepository<CommentResult> { }

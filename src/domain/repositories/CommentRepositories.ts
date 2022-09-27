import { CommentModel } from '../Models/comment'
import { Result } from '../Vo/result'
import { BaseRepository } from './baseRepository'

export type CommentResult = Result<CommentModel[]>

export interface AllComments extends BaseRepository<CommentResult> { }

export interface PostComments extends BaseRepository<CommentResult> { }

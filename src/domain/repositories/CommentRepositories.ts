import { CommentModel } from '../models/Comment'
import { Result } from '../vo/Result'
import { BaseRepository } from './BaseRepository'

export type CommentResult = Result<CommentModel[]>

export interface AllComments extends BaseRepository<CommentResult> { }

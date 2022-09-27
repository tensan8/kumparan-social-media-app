import { UserModel } from '../models/user'
import { Result } from '../vo/result'
import { BaseRepository } from './baseRepository'

export type UserResult = Result<UserModel[]>

export type SingleUserResult = Result<UserModel>

export interface AllUsers extends BaseRepository<UserResult> { }

export interface SingleUser extends BaseRepository<SingleUserResult> { }

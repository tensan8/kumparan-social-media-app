import { UserModel } from '../Models/user'
import { Result } from '../Vo/result'
import { BaseRepository } from './baseRepository'

export type UserResult = Result<UserModel[]>

export type SingleUserResult = Result<UserModel>

export interface AllUsers extends BaseRepository<UserResult> { }

export interface SingleUser extends BaseRepository<SingleUserResult> { }

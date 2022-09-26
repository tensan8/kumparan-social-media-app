import { UserModel } from '../models/User'
import { Result } from './../vo/Result'
import { BaseRepository } from './BaseRepository'

export type UserResult = Result<UserModel[]>

export type SingleUserResult = Result<UserModel>

export interface AllUsers extends BaseRepository<UserResult> { }

export interface SingleUser extends BaseRepository<SingleUserResult> { }

import { BaseRepository } from './BaseRepository'
import { Result } from '../vo/Result'
import { PhotoModel } from './../models/Photo'

export type PhotosResult = Result<PhotoModel[]>

export interface AlbumThumbnails extends BaseRepository<PhotosResult> { }

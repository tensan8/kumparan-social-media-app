import { BaseRepository } from './baseRepository'
import { Result } from '../Vo/result'
import { PhotoModel } from '../Models/photo'

export type PhotosResult = Result<PhotoModel[]>

export interface AlbumThumbnails extends BaseRepository<PhotosResult> { }

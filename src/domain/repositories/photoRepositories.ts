import { BaseRepository } from './baseRepository'
import { Result } from '../vo/result'
import { PhotoModel } from '../models/photo'

export type PhotosResult = Result<PhotoModel[]>

export type SinglePhotoResult = Result<PhotoModel>

export interface AlbumThumbnails extends BaseRepository<PhotosResult> { }

export interface SinglePhoto extends BaseRepository<SinglePhotoResult> { }

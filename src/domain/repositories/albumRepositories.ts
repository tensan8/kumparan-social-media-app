import { BaseRepository } from './baseRepository'
import { AlbumModel } from '../models/album'
import { Result } from '../vo/result'

export type AlbumResults = Result<AlbumModel[]>

export type SingleAlbumResult = Result<AlbumModel>

export interface AllAlbums extends BaseRepository<AlbumResults> { }

export interface SingleAlbum extends BaseRepository<SingleAlbumResult> { }

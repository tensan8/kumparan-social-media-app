import { BaseRepository } from './baseRepository'
import { AlbumModel } from '../Models/album'
import { Result } from '../Vo/result'

export type AlbumResults = Result<AlbumModel[]>

export type SingleAlbumResult = Result<AlbumModel>

export interface AllAlbums extends BaseRepository<AlbumResults> { }

export interface SingleAlbum extends BaseRepository<SingleAlbumResult> { }

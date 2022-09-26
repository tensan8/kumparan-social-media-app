import { BaseRepository } from './BaseRepository'
import { AlbumModel } from '../models/Album'
import { Result } from './../vo/Result'

export type AlbumResults = Result<AlbumModel[]>

export type SingleAlbumResult = Result<AlbumModel>

export interface AllAlbums extends BaseRepository<AlbumResults> { }

export interface SingleAlbum extends BaseRepository<SingleAlbumResult> { }

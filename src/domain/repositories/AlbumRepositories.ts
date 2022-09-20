import { BaseRepository } from './BaseRepository'
import { AlbumModel } from '../models/Album'
import { Result } from './../vo/Result'

export type AlbumResults = Result<AlbumModel[]>

export interface AllAlbums extends BaseRepository<AlbumResults> { }

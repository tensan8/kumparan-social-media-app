import { PhotoModel } from './../../../domain/models/Photo'
import { AlbumModel } from './../../../domain/models/Album'

export interface BaseAlbumPhotosList {
  album: AlbumModel
  photos: PhotoModel[]
}

import { PhotoModel } from '../../../domain/models/photo'
import { AlbumModel } from '../../../domain/models/album'

export interface BaseAlbumPhotosList {
  album: AlbumModel
  photos: PhotoModel[]
}

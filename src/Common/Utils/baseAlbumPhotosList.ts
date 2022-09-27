import { PhotoModel } from '../../Domain/Models/photo'
import { AlbumModel } from '../../Domain/Models/album'

export interface BaseAlbumPhotosList {
  album: AlbumModel
  photos: PhotoModel[]
}

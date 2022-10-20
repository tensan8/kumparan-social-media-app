import { PhotoModel } from '../../../domain/models/photo'
import { GetPhotosOnAlbum } from '../../../data/repositories/photoRepositoryImpl'

interface AlbumPhotoPagePhotosViewModel {
  photos: PhotoModel[] | null
}

export const useAlbumPhotoPagePhotosViewModel = (albumId: number): AlbumPhotoPagePhotosViewModel => {
  const { result } = GetPhotosOnAlbum(albumId)

  return {
    photos: result.data
  }
}

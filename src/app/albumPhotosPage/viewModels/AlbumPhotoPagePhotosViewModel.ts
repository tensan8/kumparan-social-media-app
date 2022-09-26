import { PhotoModel } from '../../../domain/models/Photo'
import { GetAllPhotosOnAlbum } from './../../../data/repositories/PhotoRepositoryImpl/Photos'

interface AlbumPhotoPagePhotosViewModel {
  photos: PhotoModel[] | null
}

export const useAlbumPhotoPagePhotosViewModel = (albumId: number): AlbumPhotoPagePhotosViewModel => {
  const { result } = GetAllPhotosOnAlbum(albumId)

  return {
    photos: result.data
  }
}

import { GetAllPhotosOnAlbum } from './../../../data/repositories/PhotoRepositoryImpl/Photos'
import { PhotoModel } from './../../../domain/models/Photo'

interface ProfilePagePhotosOnAlbumViewModel {
  photos: PhotoModel[] | null
}

export const useProfilePagePhotoOnAlbumViewModel = (albumId: number): ProfilePagePhotosOnAlbumViewModel => {
  const { result } = GetAllPhotosOnAlbum(albumId)

  return {
    photos: result.data
  }
}
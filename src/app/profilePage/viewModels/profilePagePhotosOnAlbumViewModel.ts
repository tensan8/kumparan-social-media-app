import { GetAllPhotosOnAlbum } from '../../../data/repositories/photoRepositoryImpl'
import { PhotoModel } from '../../../domain/models/photo'

interface ProfilePagePhotosOnAlbumViewModel {
  photos: PhotoModel[] | null
}

export const useProfilePagePhotoOnAlbumViewModel = (albumIds: number[]): ProfilePagePhotosOnAlbumViewModel => {
  const { result } = GetAllPhotosOnAlbum(albumIds)

  return {
    photos: result.data
  }
}

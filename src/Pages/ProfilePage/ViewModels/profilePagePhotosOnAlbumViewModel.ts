import { GetAllPhotosOnAlbum } from '../../../Data/Repositories/PhotoRepositoryImpl/photos'
import { PhotoModel } from '../../../Domain/Models/photo'

interface ProfilePagePhotosOnAlbumViewModel {
  photos: PhotoModel[] | null
}

export const useProfilePagePhotoOnAlbumViewModel = (albumId: number): ProfilePagePhotosOnAlbumViewModel => {
  const { result } = GetAllPhotosOnAlbum(albumId)

  return {
    photos: result.data
  }
}

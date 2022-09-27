import { PhotoModel } from '../../../Domain/Models/photo'
import { GetAllPhotosOnAlbum } from '../../../Data/Repositories/PhotoRepositoryImpl/photos'

interface AlbumPhotoPagePhotosViewModel {
  photos: PhotoModel[] | null
}

export const useAlbumPhotoPagePhotosViewModel = (albumId: number): AlbumPhotoPagePhotosViewModel => {
  const { result } = GetAllPhotosOnAlbum(albumId)

  return {
    photos: result.data
  }
}

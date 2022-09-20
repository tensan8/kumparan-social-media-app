import { AlbumModel } from './../../../domain/models/Album'
import { GetAllPhotosOnAlbum } from './../../../data/repositories/PhotoRepositoryImpl/Photos'
import { PhotoModel } from './../../../domain/models/Photo'

interface ProfilePagePhotosOnAlbumViewModel {
  photos: PhotoModel[][] | null
}

export const useProfilePagePhotoOnAlbumViewModel = (albums: AlbumModel[]): ProfilePagePhotosOnAlbumViewModel => {
  const photosList: PhotoModel[][] = []

  albums.map((album: AlbumModel) => {
    const { result } = GetAllPhotosOnAlbum(album.id)
    if (result.data != null && result.data.length > 0) {
      photosList.push(result.data)
    }
    return null
  })

  return {
    photos: photosList
  }
}

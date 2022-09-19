import { GetAllPhotosOnAlbum } from './../../../data/repositories/PhotoRepositoryImpl/Photos'

interface ProfilePageAlbumsThumbnailsViewModel {
  albumThumbnailSources: string // need to update this later
}

export const useProfilePageAlbumsThumbnailsViewModel = (albumId: number): ProfilePageAlbumsThumbnailsViewModel => {
  const { result } = GetAllPhotosOnAlbum(albumId)

  return {
    albumThumbnailSources: result.data != null && result.data.length > 0 ? result.data[0].url : ''
  }
}

import { AlbumModel } from '../../../domain/models/album'
import { GetSingleAlbum } from '../../../data/repositories/albumRepositoryImpl/singleAlbum'

interface EnlargedPhotoAlbumViewModel {
  album: AlbumModel | null
}

export const useEnlargedPhotoAlbumViewModel = (albumId: number): EnlargedPhotoAlbumViewModel => {
  const { result } = GetSingleAlbum(albumId)

  return {
    album: result.data
  }
}

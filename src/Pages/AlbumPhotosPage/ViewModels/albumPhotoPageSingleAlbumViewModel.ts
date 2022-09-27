import { AlbumModel } from '../../../Domain/Models/album'
import { GetSingleAlbum } from '../../../Data/repositories/albumRepositoryImpl/singleAlbum'

interface AlbumPhotoPageSingleAlbumViewModel {
  album: AlbumModel | null
}

export const useAlbumPhotoPageSingleAlbumViewModel = (albumId: number): AlbumPhotoPageSingleAlbumViewModel => {
  const { result } = GetSingleAlbum(albumId)

  return {
    album: result.data
  }
}

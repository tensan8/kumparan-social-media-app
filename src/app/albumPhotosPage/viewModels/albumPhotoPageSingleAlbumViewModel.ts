import { AlbumModel } from '../../../domain/models/album'
import { GetSingleAlbum } from '../../../data/repositories/albumRepositoryImpl/singleAlbum'

interface AlbumPhotoPageSingleAlbumViewModel {
  album: AlbumModel | null
}

export const useAlbumPhotoPageSingleAlbumViewModel = (albumId: number): AlbumPhotoPageSingleAlbumViewModel => {
  const { result } = GetSingleAlbum(albumId)

  return {
    album: result.data
  }
}

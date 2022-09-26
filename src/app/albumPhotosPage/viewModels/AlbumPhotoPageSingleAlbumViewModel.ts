import { AlbumModel } from './../../../domain/models/Album'
import { GetSingleAlbum } from './../../../data/repositories/AlbumRepositoryImpl/SingleAlbum'

interface AlbumPhotoPageSingleAlbumViewModel {
  album: AlbumModel | null
}

export const useAlbumPhotoPageSingleAlbumViewModel = (albumId: number): AlbumPhotoPageSingleAlbumViewModel => {
  const { result } = GetSingleAlbum(albumId)

  return {
    album: result.data
  }
}

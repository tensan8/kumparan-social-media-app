import { GetAllAlbums } from './../../../data/repositories/AlbumRepositoryImpl/Album'
import { AlbumModel } from './../../../domain/models/Album'

interface ProfilePageAlbumsListViewModel {
  albums: AlbumModel[] | null
}

export const useProfilePageAlbumsListViewModel = (userId: number): ProfilePageAlbumsListViewModel => {
  const { result } = GetAllAlbums(userId)

  return {
    albums: result.data
  }
}

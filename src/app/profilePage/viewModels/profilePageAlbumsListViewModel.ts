import { GetAllAlbums } from '../../../data/repositories/albumRepositoryImpl/album'
import { AlbumModel } from '../../../domain/models/album'

interface ProfilePageAlbumsListViewModel {
  albums: AlbumModel[] | null
}

export const useProfilePageAlbumsListViewModel = (userId: number): ProfilePageAlbumsListViewModel => {
  const { result } = GetAllAlbums(userId)

  return {
    albums: result.data
  }
}

import { GetAllAlbums } from '../../../data/repositories/albumRepositoryImpl/Album'
import { AlbumModel } from '../../../Domain/Models/album'

interface ProfilePageAlbumsListViewModel {
  albums: AlbumModel[] | null
}

export const useProfilePageAlbumsListViewModel = (userId: number): ProfilePageAlbumsListViewModel => {
  const { result } = GetAllAlbums(userId)

  return {
    albums: result.data
  }
}

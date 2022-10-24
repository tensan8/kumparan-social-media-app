import { GetSingleUser } from '../../../data/repositories/userRepositoryImpl'
import { UserModel } from '../../../domain/models/user'

interface AlbumPhotoPageUserViewModel {
  user: UserModel | null
}

export const useAlbumPhotoPageUserViewModel = (userId: number): AlbumPhotoPageUserViewModel => {
  const { result } = GetSingleUser(userId)

  return {
    user: result.data
  }
}

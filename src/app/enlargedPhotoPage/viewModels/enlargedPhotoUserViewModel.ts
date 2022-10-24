import { GetSingleUser } from '../../../data/repositories/userRepositoryImpl'
import { UserModel } from '../../../domain/models/user'

interface EnlargedPhotoUserViewModel {
  user: UserModel | null
}

export const useEnlargedPhotoUserViewModel = (userId: number): EnlargedPhotoUserViewModel => {
  const { result } = GetSingleUser(userId)

  return {
    user: result.data
  }
}

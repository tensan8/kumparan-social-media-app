import { GetSingleUser } from '../../../data/repositories/userRepositoryImpl'
import { UserModel } from '../../../domain/models/user'

interface DetailPageUserInfoViewModel {
  user: UserModel | null
}

export const useDetailPageUserInfoViewModel = (userId: number): DetailPageUserInfoViewModel => {
  const { result } = GetSingleUser(userId)

  return {
    user: result.data
  }
}

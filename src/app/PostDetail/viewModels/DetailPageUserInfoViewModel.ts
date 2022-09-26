import { GetSingleUser } from '../../../data/repositories/UserRepositoryImpl/SingleUser'
import { UserModel } from '../../../domain/models/User'

interface DetailPageUserInfoViewModel {
  user: UserModel | null
}

export const useDetailPageUserInfoViewModel = (userId: number): DetailPageUserInfoViewModel => {
  const { result } = GetSingleUser(userId)

  return {
    user: result.data
  }
}

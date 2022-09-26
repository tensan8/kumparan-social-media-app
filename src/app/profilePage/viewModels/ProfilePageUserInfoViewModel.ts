import { GetSingleUser } from '../../../data/repositories/UserRepositoryImpl/SingleUser'
import { UserModel } from '../../../domain/models/User'

interface ProfilePageUserInfoViewModel {
  user: UserModel | null
}

export const useProfilePageUserInfoViewModel = (userId: number): ProfilePageUserInfoViewModel => {
  const { result } = GetSingleUser(userId)

  return {
    user: result.data
  }
}

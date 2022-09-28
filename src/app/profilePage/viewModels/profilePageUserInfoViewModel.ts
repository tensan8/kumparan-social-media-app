import { GetSingleUser } from '../../../data/repositories/userRepositoryImpl/singleUser'
import { UserModel } from '../../../domain/models/user'

interface ProfilePageUserInfoViewModel {
  user: UserModel | null
}

export const useProfilePageUserInfoViewModel = (userId: number): ProfilePageUserInfoViewModel => {
  const { result } = GetSingleUser(userId)

  return {
    user: result.data
  }
}

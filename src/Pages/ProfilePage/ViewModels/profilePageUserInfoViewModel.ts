import { GetSingleUser } from '../../../Data/Repositories/UserRepositoryImpl/SingleUser'
import { UserModel } from '../../../Domain/Models/user'

interface ProfilePageUserInfoViewModel {
  user: UserModel | null
}

export const useProfilePageUserInfoViewModel = (userId: number): ProfilePageUserInfoViewModel => {
  const { result } = GetSingleUser(userId)

  return {
    user: result.data
  }
}

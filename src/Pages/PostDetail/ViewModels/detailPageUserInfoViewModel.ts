import { GetSingleUser } from '../../../Data/Repositories/UserRepositoryImpl/singleUser'
import { UserModel } from '../../../Domain/Models/user'

interface DetailPageUserInfoViewModel {
  user: UserModel | null
}

export const useDetailPageUserInfoViewModel = (userId: number): DetailPageUserInfoViewModel => {
  const { result } = GetSingleUser(userId)

  return {
    user: result.data
  }
}
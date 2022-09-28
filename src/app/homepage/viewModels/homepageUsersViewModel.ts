import { GetAllUsers } from '../../../data/repositories/userRepositoryImpl/userInfo'
import { UserModel } from '../../../domain/models/user'

interface HomepageUsersViewModel {
  allUsers: UserModel[] | null
}

export const useHomepageUsersViewModel = (): HomepageUsersViewModel => {
  const { result } = GetAllUsers()

  return {
    allUsers: result.data
  }
}

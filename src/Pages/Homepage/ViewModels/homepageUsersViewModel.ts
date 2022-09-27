import { GetAllUsers } from '../../../Data/Repositories/UserRepositoryImpl/UserInfo'
import { UserModel } from '../../../Domain/Models/user'

interface HomepageUsersViewModel {
  allUsers: UserModel[] | null
}

export const useHomepageUsersViewModel = (): HomepageUsersViewModel => {
  const { result } = GetAllUsers()

  return {
    allUsers: result.data
  }
}

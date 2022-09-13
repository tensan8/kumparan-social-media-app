import { GetAllUsers } from './../../../data/repositories/UserRepositoryImpl/UserInfo'
import { UserModel } from './../../../domain/models/User'

interface HomepageUsersViewModel {
  allUsers: UserModel[] | null
}

export const useHomepageUsersViewModel = (): HomepageUsersViewModel => {
  const { result } = GetAllUsers()

  return {
    allUsers: result.data
  }
}

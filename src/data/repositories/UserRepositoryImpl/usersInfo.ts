import { mapUserModel } from '../../Mappers/userMapper'
import { UserDTO } from '../../Sources/Dtos/userDTO'
import { UserModel } from '../../../Domain/Models/user'
import * as UserRepositories from '../../../Domain/Repositories/userRepositories'
import * as UserDataSources from '../../Sources/UserDataSource'
import { Result } from '../../../Domain/Vo/result'

export const GetAllUsers = (): UserRepositories.AllUsers => {
  const result = new Result<UserModel[]>()
  const { data } = UserDataSources.GetAllUsersQuery()

  const retrieveUserInfo = (data != null)
    ? data.map((data: UserDTO) => mapUserModel(data))
    : []

  result.setData(retrieveUserInfo)

  return { result }
}

import { mapUserModel } from '../../mappers/userMapper'
import { UserDTO } from '../../sources/dtos/userDTO'
import { UserModel } from '../../../domain/models/user'
import * as UserRepositories from '../../../domain/repositories/userRepositories'
import * as UserDataSources from '../../sources/userDataSource'
import { Result } from '../../../domain/vo/result'

export const GetAllUsers = (): UserRepositories.AllUsers => {
  const result = new Result<UserModel[]>()
  const { data } = UserDataSources.GetAllUsersQuery()

  const retrieveUserInfo = (data != null)
    ? data.map((data: UserDTO) => mapUserModel(data))
    : []

  result.setData(retrieveUserInfo)

  return { result }
}

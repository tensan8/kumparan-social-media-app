import { mapUserModel } from './../../mappers/UserMapper'
import { UserDTO } from './../../sources/dtos/UserDTO'
import { UserModel } from '../../../domain/models/User'
import * as UserRepositories from '../../../domain/repositories/UserRepositories'
import * as UserDataSources from '../../sources/UserDataSource'
import { Result } from '../../../domain/vo/Result'

export const GetAllUsers = (): UserRepositories.AllUsers => {
  const result = new Result<UserModel[]>()
  const { data } = UserDataSources.GetAllUsersQuery()

  const retrieveUserInfo = (data != null)
    ? data.map((data: UserDTO) => mapUserModel(data))
    : []

  result.setData(retrieveUserInfo)

  return { result }
}

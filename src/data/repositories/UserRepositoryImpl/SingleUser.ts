import { mapUserModel } from './../../mappers/UserMapper'
import * as UserRepositories from '../../../domain/repositories/UserRepositories'
import * as UserDataSources from '../../sources/UserDataSource'
import { Result } from '../../../domain/vo/Result'
import { UserModel } from '../../../domain/models/User'

export const GetSingleUser = (userId: number): UserRepositories.SingleUser => {
  const result = new Result<UserModel>()
  const { data } = UserDataSources.GetSingleUserQuery(userId)

  if (data != null) {
    result.setData(mapUserModel(data))
  }

  return { result }
}

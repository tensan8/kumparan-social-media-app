import { mapUserModel } from '../../mappers/userMapper'
import * as UserRepositories from '../../../domain/repositories/userRepositories'
import * as UserDataSources from '../../sources/userDataSource'
import { Result } from '../../../domain/vo/result'
import { UserModel } from '../../../domain/models/user'

export const GetSingleUser = (userId: number): UserRepositories.SingleUser => {
  const result = new Result<UserModel>()
  const { data } = UserDataSources.GetSingleUserQuery(userId)

  if (data != null) {
    result.setData(mapUserModel(data))
  }

  return { result }
}

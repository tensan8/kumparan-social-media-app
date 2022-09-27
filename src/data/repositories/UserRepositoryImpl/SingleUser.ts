import { mapUserModel } from '../../Mappers/userMapper'
import * as UserRepositories from '../../../Domain/Repositories/userRepositories'
import * as UserDataSources from '../../Sources/UserDataSource'
import { Result } from '../../../Domain/Vo/result'
import { UserModel } from '../../../Domain/Models/user'

export const GetSingleUser = (userId: number): UserRepositories.SingleUser => {
  const result = new Result<UserModel>()
  const { data } = UserDataSources.GetSingleUserQuery(userId)

  if (data != null) {
    result.setData(mapUserModel(data))
  }

  return { result }
}

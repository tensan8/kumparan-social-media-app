import useSWR, { SWRResponse } from 'swr'
import { fetcher } from '../../utils/fetcher'
import { UserDTO } from '../dtos/UserDTO'

export const GetAllUsersQuery = (): SWRResponse<UserDTO[], any> => {
  return useSWR<UserDTO[], any>('https://jsonplaceholder.typicode.com/users', fetcher)
}

import useSWR, { SWRResponse } from 'swr'
import { fetcher } from '../../Utils/fetcher'
import { UserDTO } from '../Dtos/userDTO'

export const GetAllUsersQuery = (): SWRResponse<UserDTO[], any> => {
  return useSWR<UserDTO[], any>('https://jsonplaceholder.typicode.com/users', fetcher)
}

export const GetSingleUserQuery = (userId: number): SWRResponse<UserDTO, any> => {
  return useSWR<UserDTO, any>(`https://jsonplaceholder.typicode.com/users/${userId}`, fetcher)
}

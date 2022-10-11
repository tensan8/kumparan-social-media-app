import { UseQueryResult, useQuery } from '@tanstack/react-query'
import useSWR, { SWRResponse } from 'swr'
import { fetcher } from '../../utils/fetcher'
import { UserDTO } from '../dtos/userDTO'

export const GetAllUsersQuery = (): UseQueryResult<UserDTO[], any> => {
  return useQuery<UserDTO[], any>(
    ['allUsers'],
    async () => await fetcher('https://jsonplaceholder.typicode.com/users'),
    { suspense: true, staleTime: Infinity }
  )
}

export const GetSingleUserQuery = (userId: number): SWRResponse<UserDTO, any> => {
  return useSWR<UserDTO, any>(`https://jsonplaceholder.typicode.com/users/${userId}`, fetcher)
}

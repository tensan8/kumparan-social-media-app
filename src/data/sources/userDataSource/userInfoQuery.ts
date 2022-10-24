import { UseQueryResult, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'
import { UserDTO } from '../dtos/userDTO'

export const GetAllUsersQuery = (): UseQueryResult<UserDTO[], any> => {
  return useQuery<UserDTO[], any>(
    ['allUsers'],
    async () => await fetcher('https://jsonplaceholder.typicode.com/users'),
    { suspense: true, staleTime: Infinity }
  )
}

export const GetSingleUserQuery = (userId: number): UseQueryResult<UserDTO, any> => {
  return useQuery<UserDTO, any>(
    [`singleUser-${userId}`],
    async () => await fetcher(`https://jsonplaceholder.typicode.com/users/${userId}`),
    {
      suspense: true,
      initialData: () => useQueryClient().getQueryData<UserDTO[]>(['allUsers'])?.find(user => user.id === userId)
    }
  )
}

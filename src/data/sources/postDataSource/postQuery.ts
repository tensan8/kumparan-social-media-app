import { PostDTO } from '../dtos/postDTO'
import useSWR, { SWRResponse } from 'swr'
import { fetcher } from '../../utils/fetcher'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const AllPostQuery = (): UseQueryResult<PostDTO[], any> => {
  return useQuery<PostDTO[], any>(
    ['allPosts'],
    async () => await fetcher('https://jsonplaceholder.typicode.com/posts'),
    { suspense: true }
  )
}

export const SinglePostQuery = (postId: number): SWRResponse<PostDTO, any> => {
  return useSWR<PostDTO, any>(`https://jsonplaceholder.typicode.com/posts/${postId}`, fetcher)
}

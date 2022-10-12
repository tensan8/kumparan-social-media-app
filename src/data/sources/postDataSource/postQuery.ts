import { PostDTO } from '../dtos/postDTO'
import { fetcher } from '../../utils/fetcher'
import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query'

export const AllPostQuery = (): UseQueryResult<PostDTO[], any> => {
  return useQuery<PostDTO[], any>(
    ['allPosts'],
    async () => await fetcher('https://jsonplaceholder.typicode.com/posts'),
    { suspense: true, staleTime: Infinity }
  )
}

export const SinglePostQuery = (postId: number): UseQueryResult<PostDTO, any> => {
  return useQuery<PostDTO, any>(
    ['singlePost'],
    async () => await fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}`),
    {
      suspense: true,
      staleTime: Infinity,
      initialData: () => useQueryClient().getQueryData<PostDTO[]>(['allPosts'])?.find(data => data.id === postId)
    })
}

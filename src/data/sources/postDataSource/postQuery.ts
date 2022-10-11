import { PostDTO } from '../dtos/postDTO'
import { fetcher } from '../../utils/fetcher'
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { schema } from 'normalizr'

const postSchema = new schema.Entity('post')

export const AllPostQuery = (): UseQueryResult<PostDTO[], any> => {
  return useQuery<PostDTO[], any>(
    ['allPosts'],
    async () => await fetcher('https://jsonplaceholder.typicode.com/posts', postSchema),
    { suspense: true, staleTime: Infinity }
  )
}

export const SinglePostQuery = (postId: number): UseQueryResult<PostDTO, any> => {
  return useQuery<PostDTO, any>(
    ['singlePost'],
    async () => await fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}`, postSchema),
    { suspense: true, staleTime: Infinity })
}

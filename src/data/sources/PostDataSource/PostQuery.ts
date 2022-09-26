import { PostDTO } from '../dtos/postDTO'
import useSWR, { SWRResponse } from 'swr'
import { fetcher } from '../../utils/fetcher'

export const AllPostQuery = (): SWRResponse<PostDTO[], any> => {
  return useSWR<PostDTO[], any>('https://jsonplaceholder.typicode.com/posts', fetcher)
}

export const SinglePostQuery = (postId: number): SWRResponse<PostDTO, any> => {
  return useSWR<PostDTO, any>(`https://jsonplaceholder.typicode.com/posts/${postId}`, fetcher)
}

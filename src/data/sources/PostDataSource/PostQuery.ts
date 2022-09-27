import { PostDTO } from '../Dtos/postDTO'
import useSWR, { SWRResponse } from 'swr'
import { fetcher } from '../../Utils/fetcher'

export const AllPostQuery = (): SWRResponse<PostDTO[], any> => {
  return useSWR<PostDTO[], any>('https://jsonplaceholder.typicode.com/posts', fetcher)
}

export const SinglePostQuery = (postId: number): SWRResponse<PostDTO, any> => {
  return useSWR<PostDTO, any>(`https://jsonplaceholder.typicode.com/posts/${postId}`, fetcher)
}

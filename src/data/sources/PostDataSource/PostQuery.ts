
import useSWR, { SWRResponse } from 'swr'
import fetcher from '../../../utils/fetcher'

interface PostDTO {
  id: number
  title: string
  body: string
  userId: number
}

export const AllPostQuery = (): SWRResponse<PostDTO[], any> => {
  return useSWR<PostDTO[], any>('https://jsonplaceholder.typicode.com/posts', fetcher)
}

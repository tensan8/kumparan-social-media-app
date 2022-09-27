import useSWR, { SWRResponse } from 'swr'
import { CommentDTO } from '../Dtos/commentDTO'
import { fetcher } from '../../Utils/fetcher'

export const AllCommentsQuery = (): SWRResponse<CommentDTO[], any> => {
  return useSWR<CommentDTO[], any>('https://jsonplaceholder.typicode.com/comments', fetcher)
}

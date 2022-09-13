import useSWR, { SWRResponse } from 'swr'
import { CommentDTO } from '../dtos/CommentDTO'
import { fetcher } from '../../utils/fetcher'

export const AllCommentsQuery = (): SWRResponse<CommentDTO[], any> => {
  return useSWR<CommentDTO[], any>('https://jsonplaceholder.typicode.com/comments', fetcher)
}

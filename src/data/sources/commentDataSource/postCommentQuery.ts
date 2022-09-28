import { fetcher } from '../../utils/fetcher'
import useSWR, { SWRResponse } from 'swr'
import { CommentDTO } from '../dtos/commentDTO'

export const PostCommentQuery = (postId: number): SWRResponse<CommentDTO[], any> => {
  return useSWR<CommentDTO[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, fetcher)
}

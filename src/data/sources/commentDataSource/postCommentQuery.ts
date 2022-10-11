import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'
import { CommentDTO } from '../dtos/commentDTO'

export const PostCommentQuery = (postId: number): UseQueryResult<CommentDTO[], any> => {
  return useQuery<CommentDTO[]>(
    ['singlePost'],
    async () => await fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
    { suspense: true, staleTime: Infinity }
  )
}

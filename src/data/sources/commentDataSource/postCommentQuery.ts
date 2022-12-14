import { UseQueryResult, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'
import { CommentDTO } from '../dtos/commentDTO'

export const PostCommentQuery = (postId: number): UseQueryResult<CommentDTO[], any> => {
  return useQuery<CommentDTO[]>(
    [`singleComment-${postId}`],
    async () => await fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
    {
      suspense: true,
      initialData: () => useQueryClient().getQueryData<CommentDTO[]>(['allComments'])?.flatMap((comment: CommentDTO) => comment.postId === postId ? comment : [])
    }
  )
}

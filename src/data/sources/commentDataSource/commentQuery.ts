import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { CommentDTO } from '../dtos/commentDTO'
import { fetcher } from '../../utils/fetcher'
import { schema } from 'normalizr'

const commentSchema = new schema.Entity('comment')

export const AllCommentsQuery = (): UseQueryResult<CommentDTO[], any> => {
  return useQuery<CommentDTO[], any>(
    ['allComments'],
    async () => await fetcher('https://jsonplaceholder.typicode.com/comments', commentSchema),
    { suspense: true, staleTime: Infinity }
  )
}

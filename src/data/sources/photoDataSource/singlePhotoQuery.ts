import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'
import { PhotoDTO } from '../dtos/photoDTO'
import { schema } from 'normalizr'

const photoSchema = new schema.Entity('photo')

export const SinglePhotoQuery = (photoId: number): UseQueryResult<PhotoDTO, any> => {
  return useQuery<PhotoDTO, any>(
    ['singlePhoto'],
    async () => await fetcher(`https://jsonplaceholder.typicode.com/photos/${photoId}`, photoSchema),
    { suspense: true, staleTime: Infinity }
  )
}

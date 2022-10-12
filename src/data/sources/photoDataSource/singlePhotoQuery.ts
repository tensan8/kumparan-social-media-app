import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'
import { PhotoDTO } from '../dtos/photoDTO'

export const SinglePhotoQuery = (photoId: number): UseQueryResult<PhotoDTO, any> => {
  return useQuery<PhotoDTO, any>(
    ['singlePhoto'],
    async () => await fetcher(`https://jsonplaceholder.typicode.com/photos/${photoId}`),
    { suspense: true, staleTime: Infinity }
  )
}

import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'
import { PhotoDTO } from '../dtos/photoDTO'
import { schema } from 'normalizr'

const photoSchema = new schema.Entity('photo')

export const AllPhotosOnAlbumQuery = (albumId: number): UseQueryResult<PhotoDTO[], any> => {
  return useQuery<PhotoDTO[], any>(
    ['allPhotos'],
    async () => await fetcher(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`, photoSchema),
    { suspense: true, staleTime: Infinity }
  )
}

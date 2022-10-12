import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'
import { PhotoDTO } from '../dtos/photoDTO'

export const AllPhotosOnAlbumQuery = (albumId: number): UseQueryResult<PhotoDTO[], any> => {
  return useQuery<PhotoDTO[], any>(
    ['allPhotos'],
    async () => await fetcher(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`),
    { suspense: true, staleTime: Infinity }
  )
}

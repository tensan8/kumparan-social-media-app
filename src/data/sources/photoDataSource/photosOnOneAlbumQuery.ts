import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { PhotoDTO } from '../dtos/photoDTO'
import { fetcher } from '../../utils/fetcher'

export const PhotosOnOneAlbumQuery = (albumId: number): UseQueryResult<PhotoDTO[], any> => {
  return useQuery<PhotoDTO[], any>(
    [`photosOnAlbum-${albumId}`],
    async () => await fetcher(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`),
    {
      suspense: true
    }
  )
}

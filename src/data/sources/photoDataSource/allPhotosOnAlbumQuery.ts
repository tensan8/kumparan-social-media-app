import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'
import { PhotoDTO } from '../dtos/photoDTO'

export const AllPhotosOnAlbumQuery = (albumsIdList: number[]): Array<UseQueryResult<PhotoDTO[], any>> => {
  return albumsIdList.map((albumId: number) => {
    return useQuery<PhotoDTO[], any>(
      ['photoOnAlbum', albumId],
      async () => await fetcher(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`),
      {
        suspense: true,
        staleTime: Infinity
      }
    )
  })
}

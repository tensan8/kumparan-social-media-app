import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'
import { AlbumDTO } from '../dtos/albumDTO'
import { schema } from 'normalizr'

const albumSchema = new schema.Entity('album')

export const AllAlbumsQuery = (userId: number): UseQueryResult<AlbumDTO[], any> => {
  return useQuery<AlbumDTO[], any>(
    ['allAlbums'],
    async () => await fetcher(`https://jsonplaceholder.typicode.com/users/${userId}/albums`, albumSchema),
    { suspense: true, staleTime: Infinity }
  )
}

export const SingleAlbumQuery = (albumId: number): UseQueryResult<AlbumDTO, any> => {
  return useQuery<AlbumDTO, any>(
    ['singleAlbum'],
    async () => await fetcher(`https://jsonplaceholder.typicode.com/albums/${albumId}`, albumSchema),
    { suspense: true, staleTime: Infinity }
  )
}

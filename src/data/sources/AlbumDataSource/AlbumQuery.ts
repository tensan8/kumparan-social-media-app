import { fetcher } from './../../utils/fetcher'
import useSWR, { SWRResponse } from 'swr'
import { AlbumDTO } from '../dtos/AlbumDTO'

export const AllAlbumsQuery = (userId: number): SWRResponse<AlbumDTO[], any> => {
  return useSWR<AlbumDTO[], any>(`https://jsonplaceholder.typicode.com/users/${userId}/albums`, fetcher)
}

export const SingleAlbumQuery = (albumId: number): SWRResponse<AlbumDTO, any> => {
  return useSWR<AlbumDTO, any>(`https://jsonplaceholder.typicode.com/albums/${albumId}`, fetcher)
}

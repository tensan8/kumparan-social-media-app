import { fetcher } from '../../utils/fetcher'
import useSWR, { SWRResponse } from 'swr'
import { PhotoDTO } from '../dtos/photoDTO'

export const AllPhotosOnAlbumQuery = (albumId: number): SWRResponse<PhotoDTO[], any> => {
  return useSWR<PhotoDTO[], any>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`, fetcher)
}

import { fetcher } from '../../utils/fetcher'
import useSWR, { SWRResponse } from 'swr'
import { PhotoDTO } from '../dtos/photoDTO'

export const SinglePhotoQuery = (photoId: number): SWRResponse<PhotoDTO, any> => {
  return useSWR<PhotoDTO, any>(`https://jsonplaceholder.typicode.com/photos/${photoId}`, fetcher)
}

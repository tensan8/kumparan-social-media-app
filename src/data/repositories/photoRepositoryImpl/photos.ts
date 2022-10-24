import { PhotoDTO } from '../../sources/dtos/photoDTO'
import { mapPhotoModel } from '../../mappers/photoMapper'
import { PhotoModel } from '../../../domain/models/photo'
import { Result } from '../../../domain/vo/result'
import * as PhotoRepositories from '../../../domain/repositories/photoRepositories'
import * as PhotoQueries from '../../sources/photoDataSource'
import { UseQueryResult } from '@tanstack/react-query'

export const GetAllPhotosOnAlbum = (albumIds: number[]): PhotoRepositories.AlbumThumbnails => {
  const result = new Result<PhotoModel[]>()
  const res = PhotoQueries.AllPhotosOnAlbumQuery(albumIds)
  const data = res.map<PhotoDTO[]>((response: UseQueryResult) => {
    return response.data as PhotoDTO[]
  })

  const retrieveThumbnails = (data != null)
    ? data.map((photoDTOS: PhotoDTO[]) => {
      return mapPhotoModel(photoDTOS[0])
    })
    : []

  result.setData(retrieveThumbnails)

  return { result }
}

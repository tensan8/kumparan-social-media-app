import { PhotoDTO } from '../../sources/dtos/photoDTO'
import { mapPhotoModel } from '../../mappers/photoMapper'
import { PhotoModel } from '../../../domain/models/photo'
import { Result } from '../../../domain/vo/result'
import * as PhotoRepositories from '../../../domain/repositories/photoRepositories'
import * as PhotoQueries from '../../sources/photoDataSource'

export const GetAllPhotosOnAlbum = (albumId: number): PhotoRepositories.AlbumThumbnails => {
  const result = new Result<PhotoModel[]>()
  const { data } = PhotoQueries.AllPhotosOnAlbumQuery(albumId)

  const retrieveThumbnails = (data != null)
    ? data.map((photo: PhotoDTO) => mapPhotoModel(photo))
    : []

  result.setData(retrieveThumbnails)

  return { result }
}

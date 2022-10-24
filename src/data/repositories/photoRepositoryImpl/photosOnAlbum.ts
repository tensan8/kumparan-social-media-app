import { mapPhotoModel } from '../../mappers/photoMapper'
import { PhotoModel } from '../../../domain/models/photo'
import { Result } from '../../../domain/vo/result'
import * as PhotoRepositories from '../../../domain/repositories/photoRepositories'
import * as PhotoQueries from '../../sources/photoDataSource'
import { PhotoDTO } from '../../sources/dtos/photoDTO'

export const GetPhotosOnAlbum = (albumId: number): PhotoRepositories.PhotosOnAlbum => {
  const result = new Result<PhotoModel[]>()
  const { data } = PhotoQueries.PhotosOnOneAlbumQuery(albumId)

  const retrievePhotosOnAlbum = (data != null)
    ? data.map((photo: PhotoDTO) => mapPhotoModel(photo))
    : []

  result.setData(retrievePhotosOnAlbum)

  return { result }
}

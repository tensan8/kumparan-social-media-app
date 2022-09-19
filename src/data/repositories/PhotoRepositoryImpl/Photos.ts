import { PhotoDTO } from './../../sources/dtos/PhotoDTO'
import { mapPhotoModel } from './../../mappers/PhotoMapper'
import { PhotoModel } from './../../../domain/models/Photo'
import { Result } from './../../../domain/vo/Result'
import * as PhotoRepositories from '../../../domain/repositories/PhotoRepositories'
import * as PhotoQueries from '../../sources/PhotoDataSource'

export const GetAllPhotosOnAlbum = (albumId: number): PhotoRepositories.AllPhotosOnAlbum => {
  const result = new Result<PhotoModel[]>()
  const { data } = PhotoQueries.AllPhotosOnAlbumQuery(albumId)

  const retrieveAllPhotosOnAlbum = (data != null)
    ? data.map((photo: PhotoDTO) => mapPhotoModel(photo))
    : []

  result.setData(retrieveAllPhotosOnAlbum)

  return { result }
}

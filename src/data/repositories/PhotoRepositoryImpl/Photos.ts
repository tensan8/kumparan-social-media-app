import { PhotoModel } from '../../../Domain/Models/photo'
import * as PhotoRepositories from '../../../Domain/Repositories/photoRepositories'
import { Result } from '../../../Domain/Vo/result'
import { mapPhotoModel } from '../../Mappers/photoMapper'
import { PhotoDTO } from '../../Sources/Dtos/photoDTO'
import * as PhotoQueries from '../../Sources/PhotoDataSource'

export const GetAllPhotosOnAlbum = (albumId: number): PhotoRepositories.AlbumThumbnails => {
  const result = new Result<PhotoModel[]>()
  const { data } = PhotoQueries.AllPhotosOnAlbumQuery(albumId)

  const retrieveThumbnails = (data != null)
    ? data.map((photo: PhotoDTO) => mapPhotoModel(photo))
    : []

  result.setData(retrieveThumbnails)

  return { result }
}

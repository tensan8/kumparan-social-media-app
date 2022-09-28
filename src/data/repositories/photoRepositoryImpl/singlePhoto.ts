import { mapPhotoModel } from '../../mappers/photoMapper'
import { PhotoModel } from '../../../domain/models/photo'
import { Result } from '../../../domain/vo/result'
import * as PhotoRepositories from '../../../domain/repositories/photoRepositories'
import * as PhotoQueries from '../../sources/photoDataSource'

export const GetSinglePhoto = (photoId: number): PhotoRepositories.SinglePhoto => {
  const result = new Result<PhotoModel>()
  const { data } = PhotoQueries.SinglePhotoQuery(photoId)

  if (data != null) {
    result.setData(mapPhotoModel(data))
  }

  return { result }
}

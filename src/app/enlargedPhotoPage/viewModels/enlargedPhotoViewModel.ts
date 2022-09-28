import { GetSinglePhoto } from './../../../data/repositories/photoRepositoryImpl/singlePhoto'
import { PhotoModel } from './../../../domain/models/photo'

interface EnlargedPhotoViewModel {
  photo: PhotoModel | null
}

export const useEnlargedPhotoViewModel = (photoId: number): EnlargedPhotoViewModel => {
  const { result } = GetSinglePhoto(photoId)

  return {
    photo: result.data
  }
}

import { PhotoModel } from '../../Domain/Models/photo'
import { PhotoDTO } from '../Sources/Dtos/photoDTO'

export const mapPhotoModel = (photoDTO: PhotoDTO): PhotoModel => {
  return (new PhotoModel({
    albumId: photoDTO.albumId,
    title: photoDTO.title,
    url: photoDTO.url,
    thumbnailUrl: photoDTO.thumbnailUrl
  }, photoDTO.id))
}

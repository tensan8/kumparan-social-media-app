import { PhotoModel } from '../../domain/models/photo'
import { PhotoDTO } from '../sources/dtos/photoDTO'

export const mapPhotoModel = (photoDTO: PhotoDTO): PhotoModel => {
  return (new PhotoModel({
    albumId: photoDTO.albumId,
    title: photoDTO.title,
    url: photoDTO.url,
    thumbnailUrl: photoDTO.thumbnailUrl
  }, photoDTO.id))
}

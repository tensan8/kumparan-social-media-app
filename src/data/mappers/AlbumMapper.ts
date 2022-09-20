import { AlbumModel } from './../../domain/models/Album'
import { AlbumDTO } from './../sources/dtos/AlbumDTO'

export const mapAlbumModel = (albumDTO: AlbumDTO): AlbumModel => {
  return (new AlbumModel({
    userId: albumDTO.userId,
    title: albumDTO.title
  }, albumDTO.id))
}

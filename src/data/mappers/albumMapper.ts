import { AlbumModel } from '../../domain/models/album'
import { AlbumDTO } from '../sources/dtos/albumDTO'

export const mapAlbumModel = (albumDTO: AlbumDTO): AlbumModel => {
  return (new AlbumModel({
    userId: albumDTO.userId,
    title: albumDTO.title
  }, albumDTO.id))
}

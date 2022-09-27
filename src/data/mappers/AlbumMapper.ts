import { AlbumModel } from '../../Domain/Models/album'
import { AlbumDTO } from '../Sources/Dtos/albumDTO'

export const mapAlbumModel = (albumDTO: AlbumDTO): AlbumModel => {
  return (new AlbumModel({
    userId: albumDTO.userId,
    title: albumDTO.title
  }, albumDTO.id))
}

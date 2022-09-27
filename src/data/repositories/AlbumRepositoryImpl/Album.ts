import { AlbumModel } from '../../../Domain/Models/album'
import * as AlbumRepositories from '../../../Domain/Repositories/albumRepositories'
import { Result } from '../../../Domain/Vo/result'
import { mapAlbumModel } from '../../Mappers/albumMapper'
import * as AlbumQueries from '../../Sources/AlbumDataSource'
import { AlbumDTO } from '../../Sources/Dtos/albumDTO'

export const GetAllAlbums = (userId: number): AlbumRepositories.AllAlbums => {
  const result = new Result<AlbumModel[]>()
  const { data } = AlbumQueries.AllAlbumsQuery(userId)

  const retrieveAllAlbums = (data != null)
    ? data.map((album: AlbumDTO) => mapAlbumModel(album))
    : []

  result.setData(retrieveAllAlbums)

  return { result }
}

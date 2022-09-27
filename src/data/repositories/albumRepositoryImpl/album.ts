import { mapAlbumModel } from '../../mappers/albumMapper'
import { AlbumDTO } from '../../sources/dtos/albumDTO'
import { AlbumModel } from '../../../domain/models/album'
import { Result } from '../../../domain/vo/result'
import * as AlbumRepositories from '../../../domain/repositories/albumRepositories'
import * as AlbumQueries from '../../sources/albumDataSource'

export const GetAllAlbums = (userId: number): AlbumRepositories.AllAlbums => {
  const result = new Result<AlbumModel[]>()
  const { data } = AlbumQueries.AllAlbumsQuery(userId)

  const retrieveAllAlbums = (data != null)
    ? data.map((album: AlbumDTO) => mapAlbumModel(album))
    : []

  result.setData(retrieveAllAlbums)

  return { result }
}

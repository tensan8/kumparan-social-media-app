import { mapAlbumModel } from './../../mappers/AlbumMapper'
import { AlbumDTO } from './../../sources/dtos/AlbumDTO'
import { AlbumModel } from './../../../domain/models/Album'
import { Result } from './../../../domain/vo/Result'
import * as AlbumRepositories from '../../../domain/repositories/AlbumRepositories'
import * as AlbumQueries from '../../sources/AlbumDataSource'

export const GetAllAlbums = (userId: number): AlbumRepositories.AllAlbums => {
  const result = new Result<AlbumModel[]>()
  const { data } = AlbumQueries.AllAlbumsQuery(userId)

  const retrieveAllAlbums = (data != null)
    ? data.map((album: AlbumDTO) => mapAlbumModel(album))
    : []

  result.setData(retrieveAllAlbums)

  return { result }
}

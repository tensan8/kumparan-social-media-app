import { mapAlbumModel } from './../../mappers/AlbumMapper'
import * as AlbumRepositories from '../../../domain/repositories/AlbumRepositories'
import * as AlbumQueries from '../../sources/AlbumDataSource'
import { Result } from '../../../domain/vo/Result'
import { AlbumModel } from '../../../domain/models/Album'

export const GetSingleAlbum = (albumId: number): AlbumRepositories.SingleAlbum => {
  const result = new Result<AlbumModel>()
  const { data } = AlbumQueries.SingleAlbumQuery(albumId)

  if (data != null) {
    result.setData(mapAlbumModel(data))
  }

  return { result }
}

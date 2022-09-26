import { mapAlbumModel } from '../../mappers/albumMapper'
import * as AlbumRepositories from '../../../domain/repositories/albumRepositories'
import * as AlbumQueries from '../../sources/albumDataSource'
import { Result } from '../../../domain/vo/result'
import { AlbumModel } from '../../../domain/models/album'

export const GetSingleAlbum = (albumId: number): AlbumRepositories.SingleAlbum => {
  const result = new Result<AlbumModel>()
  const { data } = AlbumQueries.SingleAlbumQuery(albumId)

  if (data != null) {
    result.setData(mapAlbumModel(data))
  }

  return { result }
}

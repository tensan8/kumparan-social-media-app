import { AlbumModel } from '../../../Domain/Models/album'
import * as AlbumRepositories from '../../../Domain/Repositories/albumRepositories'
import { Result } from '../../../Domain/Vo/result'
import { mapAlbumModel } from '../../Mappers/albumMapper'
import * as AlbumQueries from '../../Sources/AlbumDataSource'

export const GetSingleAlbum = (albumId: number): AlbumRepositories.SingleAlbum => {
  const result = new Result<AlbumModel>()
  const { data } = AlbumQueries.SingleAlbumQuery(albumId)

  if (data != null) {
    result.setData(mapAlbumModel(data))
  }

  return { result }
}

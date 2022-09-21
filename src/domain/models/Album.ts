import { BaseModel } from './baseModel'

interface Album {
  userId: number
  title: string
}

export class AlbumModel extends BaseModel {
  userId
  title

  constructor (album: Album, id: number) {
    super(id)

    this.userId = album.userId
    this.title = album.title
  }
}

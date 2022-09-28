import { BaseModel } from './baseModel'

interface Photo {
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}

export class PhotoModel extends BaseModel {
  albumId
  title
  url
  thumbnailUrl

  constructor (photo: Photo, id: number) {
    super(id)

    this.albumId = photo.albumId
    this.title = photo.title
    this.url = photo.url
    this.thumbnailUrl = photo.thumbnailUrl
  }
}

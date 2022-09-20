import * as React from 'react'
import { AlbumModel } from '../../../domain/models/Album'
import { PhotoModel } from '../../../domain/models/Photo'
import { useProfilePagePhotoOnAlbumViewModel } from '../../profilePage/viewModels/ProfilePagePhotosOnAlbumViewModel'
import ThumbnailWithTitle from './ThumbnailWithTitle'
import TitleHeading from './TitleHeading'

interface AlbumThumbnailsProps {
  albums: AlbumModel[]
}

const AlbumThumbnails = (props: AlbumThumbnailsProps): JSX.Element => {
  const { photos } = useProfilePagePhotoOnAlbumViewModel(props.albums)

  const GetThumbnail = React.useCallback(
    (album: AlbumModel): string => {
      let source = ''

      if (photos != null && photos.length === props.albums.length) {
        photos.map((photoList: PhotoModel[]) => {
          if (photoList[0].albumId === album.id) {
            source = photoList[0].thumbnailUrl
          }
          return null
        })
      }

      return source
    }, [photos])

  return (
        <div className="w-full">
            <TitleHeading
                text = 'Albums'
                style = 'big'
            />

            <div className="grid grid-cols-5 gap-2 w-full">
                {props.albums.map((album, index) => {
                  return (
                    <ThumbnailWithTitle
                        text = {album.title}
                        thumbnailSource = {GetThumbnail(album)}
                        key = {index}
                    />
                  )
                })}
            </div>
        </div>
  )
}

export default React.memo(AlbumThumbnails)

import * as React from 'react'
import { AlbumModel } from '../../Domain/Models/album'
import { useProfilePagePhotoOnAlbumViewModel } from '../../Pages/ProfilePage/viewModels/profilePagePhotosOnAlbumViewModel'
import ThumbnailWithTitle from './thumbnailWithTitle'

interface AlbumThumbnailsProps {
  album: AlbumModel
  username: string
  albumClickCallback?: (params: any) => any
}

const AlbumThumbnails = (props: AlbumThumbnailsProps): JSX.Element => {
  const { photos } = useProfilePagePhotoOnAlbumViewModel(props.album.id)

  return (
    <ThumbnailWithTitle
      text = {props.album.title}
      thumbnailUrl = {photos != null && photos.length > 0 ? photos[0].thumbnailUrl : ''}
      clickCallback = {photos != null && photos.length > 0 ? props.albumClickCallback : undefined}
    />
  )
}

export default React.memo(AlbumThumbnails)

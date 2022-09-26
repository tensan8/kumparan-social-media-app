import * as React from 'react'
import { AlbumModel } from '../../../domain/models/Album'
import { useProfilePagePhotoOnAlbumViewModel } from '../../profilePage/viewModels/ProfilePagePhotosOnAlbumViewModel'
import ThumbnailWithTitle from './ThumbnailWithTitle'

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

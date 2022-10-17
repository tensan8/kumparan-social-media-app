import * as React from 'react'
import ThumbnailWithTitle from './thumbnailWithTitle'

interface AlbumThumbnailsProps {
  albumTitle: string
  thumbnail: string
  username: string
  albumClickCallback?: (params: any) => any
}

const AlbumThumbnails = (props: AlbumThumbnailsProps): JSX.Element => {
  return (
    <ThumbnailWithTitle
      text = {props.albumTitle}
      thumbnailUrl = {props.thumbnail}
      clickCallback = {props.albumClickCallback}
    />
  )
}

export default React.memo(AlbumThumbnails)

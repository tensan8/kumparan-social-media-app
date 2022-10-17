import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { AlbumModel } from '../../../domain/models/album'
import AlbumThumbnails from '../atoms/albumThumbnails'
import TitleHeading from '../atoms/titleHeading'
import { useProfilePagePhotoOnAlbumViewModel } from '../../profilePage/viewModels/profilePagePhotosOnAlbumViewModel'

interface AlbumContentsProps {
  albums: AlbumModel[]
  username: string
}

const AlbumContents = (props: AlbumContentsProps): JSX.Element => {
  const navigate = useNavigate()

  const albumIds = props.albums.map((album: AlbumModel) => {
    return album.id
  })
  const { photos } = useProfilePagePhotoOnAlbumViewModel(albumIds)

  const albumClickCallback = React.useCallback(
    (albumId: number) => () => {
      navigate(`/album-photos?username=${props.username}&albumId=${albumId}`)
    }, [])

  return (
    <div className='w-full'>
      <TitleHeading
        text = 'Albums'
        style = 'big'
      />

      <div className='grid grid-cols-5 gap-2 w-full'>
        {props.albums.map((album, index) => {
          return (
            <AlbumThumbnails
              albumTitle = {album.title}
              thumbnail = {photos != null ? photos[index].thumbnailUrl : ''}
              username = {props.username}
              albumClickCallback = {albumClickCallback(album.id)}
              key = {index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(AlbumContents)

import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { AlbumModel } from '../../../domain/models/Album'
import AlbumThumbnails from '../atoms/AlbumThumbnails'
import TitleHeading from '../atoms/TitleHeading'

interface AlbumContentsProps {
  albums: AlbumModel[]
  username: string
}

const AlbumContents = (props: AlbumContentsProps): JSX.Element => {
  const navigate = useNavigate()

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
              album = {album}
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

import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { AlbumModel } from '../../../domain/models/Album'
import { PhotoModel } from '../../../domain/models/Photo'
import { UserModel } from '../../../domain/models/User'
import { useProfilePagePhotoOnAlbumViewModel } from '../../profilePage/viewModels/ProfilePagePhotosOnAlbumViewModel'
import ThumbnailWithTitle from './ThumbnailWithTitle'
import TitleHeading from './TitleHeading'

interface AlbumThumbnailsProps {
  albums: AlbumModel[]
  user: UserModel
}

const AlbumThumbnails = (props: AlbumThumbnailsProps): JSX.Element => {
  const navigate = useNavigate()

  const albumClickCallback = React.useCallback(
    (album: AlbumModel, photos: PhotoModel[]) => () => {
      navigate('/album-photos', {
        state: {
          chosenUser: props.user,
          chosenAlbum: album,
          chosenPhotos: photos
        }
      })
    }, [])

  return (
        <div className="w-full">
            <TitleHeading
                text = 'Albums'
                style = 'big'
            />

            <div className="grid grid-cols-5 gap-2 w-full">
                {props.albums.map((album, index) => {
                  const { photos } = useProfilePagePhotoOnAlbumViewModel(album.id)

                  return (
                    <ThumbnailWithTitle
                        text = {album.title}
                        thumbnailUrl = {photos != null && photos.length > 0 ? photos[0].thumbnailUrl : ''}
                        clickCallback = {photos != null ? albumClickCallback(album, photos) : undefined}
                        key = {index}
                    />
                  )
                })}
            </div>
        </div>
  )
}

export default React.memo(AlbumThumbnails)

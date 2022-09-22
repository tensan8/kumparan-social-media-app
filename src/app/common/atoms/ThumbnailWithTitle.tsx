import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { AlbumModel } from '../../../domain/models/Album'
import { UserModel } from '../../../domain/models/User'
import { useProfilePagePhotoOnAlbumViewModel } from '../../profilePage/viewModels/ProfilePagePhotosOnAlbumViewModel'
import { BaseContent } from '../utils/BaseContent'

const thumbnailWithTitleStyleMap = {
  standard: 'h-20'
} as const

type ThumbnailWithTitleStyle = keyof typeof thumbnailWithTitleStyleMap

interface ThumbnailWithTitleProps extends BaseContent {
  style?: ThumbnailWithTitleStyle
  album: AlbumModel
  user: UserModel
}

const ThumbnailWithTitle = ({
  style = 'standard',
  ...props
}: ThumbnailWithTitleProps): JSX.Element => {
  const navigate = useNavigate()
  const { photos } = useProfilePagePhotoOnAlbumViewModel(props.album.id)

  const albumClickCallback = React.useCallback(() => {
    navigate('/album-photos', {
      state: {
        chosenUser: props.user,
        chosenAlbumId: props.album
      }
    })
  }, [])

  return (
    <div className={`w-full h-full mt-2 cursor-pointer ${style}`} onClick={albumClickCallback}>
        <img src={photos != null && photos.length > 0 ? photos[0].thumbnailUrl : ''} alt="Thumbnail" className='object-cover w-full h-full rounded-xl' />
        <div className="-translate-y-16">
            <div className="w-full h-16 bg-black bg-gradient-to-t from-black opacity-40 blur-[0.09rem] rounded-b-xl"></div>
            <h2 className="-translate-y-14 mx-3 text-white font-medium text-[0.648rem]">{props.text}</h2>
        </div>
    </div>
  )
}

export default React.memo(ThumbnailWithTitle)

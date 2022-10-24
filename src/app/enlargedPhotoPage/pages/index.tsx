import * as React from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../../common/atoms/card'
import EnlargedPhotoContent from '../../common/atoms/enlargedPhotoContent'
import Navbar from '../../common/molecules/navbar'
import NotFoundPlaceholder from '../../common/molecules/notFoundPlaceholder'
import ProfileHead from '../../common/molecules/profileHead'
import { useEnlargedPhotoViewModel } from '../viewModels/enlargedPhotoViewModel'
import { useEnlargedPhotoUserViewModel } from '../viewModels/enlargedPhotoUserViewModel'
import { useEnlargedPhotoAlbumViewModel } from '../viewModels/enlargedPhotoAlbumViewModel'

const EnlargedPhotoPage = (): JSX.Element => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const params = new URLSearchParams(useLocation().search)

  const { photo } = useEnlargedPhotoViewModel(Number(params.get('photoId')))
  const { user } = useEnlargedPhotoUserViewModel(Number(params.get('userId')))
  const { album } = useEnlargedPhotoAlbumViewModel(Number(params.get('albumId')))

  return (
    user != null && album != null && photo != null
      ? <div className='block pb-10'>
            <Navbar
                backArrowAvailable = { true }
            />
            <ProfileHead
                username = {user.username}
            />
            <Card
                element={
                   <EnlargedPhotoContent
                        albumTitle = {album.title}
                        chosenPhoto = {photo}
                    />
                }
                clickable={false}
                cardSize = 'full'
                extraStyling='mt-0'
            />
        </div>
      : <NotFoundPlaceholder />
  )
}

export default EnlargedPhotoPage

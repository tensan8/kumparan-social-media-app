import * as React from 'react'
import { useLocation } from 'react-router-dom'
import AllPhotosContent from '../../common/atoms/allPhotosContent'
import Card from '../../common/atoms/card'
import Navbar from '../../common/molecules/navbar'
import { useAlbumPhotoPageSingleAlbumViewModel } from '../viewModels/albumPhotoPageSingleAlbumViewModel'
import ProfileHead from '../../common/molecules/profileHead'
import { useAlbumPhotoPagePhotosViewModel } from '../viewModels/albumPhotoPagePhotosViewModel'
import NotFoundPlaceholder from '../../common/molecules/notFoundPlaceholder'
import { useAlbumPhotoPageUserViewModel } from '../viewModels/albumPhotoPageUserViewModel'

const AlbumPhotoPage = (): JSX.Element => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const params = new URLSearchParams(useLocation().search)

  const { album } = useAlbumPhotoPageSingleAlbumViewModel(Number(params.get('albumId')))
  const { photos } = useAlbumPhotoPagePhotosViewModel(Number(params.get('albumId')))
  const { user } = useAlbumPhotoPageUserViewModel(Number(params.get('userId')))

  return (
    user != null && album != null && photos != null
      ? <div className="block pb-10">
          <Navbar
              backArrowAvailable = {true}
          />
          <ProfileHead
              username = {user.username}
          />
          <Card
            element = {
              photos.length > 0
                ? <AllPhotosContent
                    album = {album}
                    photos = {photos}
                />
                : <div></div>
            }
            clickable = { false }
            cardSize = 'full'
            extraStyling='mt-0'
          />
        </div>
      : <NotFoundPlaceholder />
  )
}

export default AlbumPhotoPage

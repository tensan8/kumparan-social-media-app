import * as React from 'react'
import { useLocation } from 'react-router-dom'
import AllPhotosContent from '../../../Common/Atoms/allPhotosContent'
import Card from '../../../Common/Atoms/card'
import Navbar from '../../../Common/Molecules/navbar'
import { useAlbumPhotoPageSingleAlbumViewModel } from '../ViewModels/albumPhotoPageSingleAlbumViewModel'
import ProfileHead from '../../../Common/Molecules/profileHead'
import { useAlbumPhotoPagePhotosViewModel } from '../ViewModels/albumPhotoPagePhotosViewModel'
import NotFoundPlaceholder from '../../../Common/Molecules/notFoundPlaceholder'

const AlbumPhotoPage = (): JSX.Element => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const params = new URLSearchParams(useLocation().search)

  const { album } = useAlbumPhotoPageSingleAlbumViewModel(Number(params.get('albumId')))
  const { photos } = useAlbumPhotoPagePhotosViewModel(Number(params.get('albumId')))

  return (
    params.get('username') != null && params.get('albumId') != null
      ? <div className="block pb-10">
          <Navbar
              backArrowAvailable = {true}
          />
          <ProfileHead
              username = {params.get('username') ?? ''}
          />
          <Card
            element = {
              album != null && photos != null && photos.length > 0
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

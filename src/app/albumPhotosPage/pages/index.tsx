import * as React from 'react'
import { useLocation } from 'react-router-dom'
import AllPhotosContent from '../../common/atoms/AllPhotosContent'
import Card from '../../common/atoms/Card'
import Navbar from '../../common/molecules/Navbar'
import { useAlbumPhotoPageSingleAlbumViewModel } from '../viewModels/AlbumPhotoPageSingleAlbumViewModel'
import ProfileHead from '../../common/molecules/ProfileHead'
import { useAlbumPhotoPagePhotosViewModel } from '../viewModels/AlbumPhotoPagePhotosViewModel'

const AlbumPhotoPage = (): JSX.Element => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const params = new URLSearchParams(useLocation().search)

  const { album } = useAlbumPhotoPageSingleAlbumViewModel(Number(params.get('albumId')))
  const { photos } = useAlbumPhotoPagePhotosViewModel(Number(params.get('albumId')))

  return (
    <div className="block pb-10">
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
  )
}

export default AlbumPhotoPage

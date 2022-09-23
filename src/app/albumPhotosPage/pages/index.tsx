import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { AlbumModel } from '../../../domain/models/Album'
import { PhotoModel } from '../../../domain/models/Photo'
import { UserModel } from '../../../domain/models/User'
import AllPhotosContent from '../../common/atoms/AllPhotosContent'
import Card from '../../common/atoms/Card'
import Navbar from '../../common/molecules/Navbar'
import ProfileHead from '../../common/molecules/ProfileHead'

const AlbumPhotoPage = (): JSX.Element => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const chosenData = useLocation().state as {
    chosenUser: UserModel
    chosenAlbum: AlbumModel
    chosenPhotos: PhotoModel[]
  }

  return (
    <div className="block pb-10">
        <Navbar
            backArrowAvailable = {true}
        />
        <ProfileHead
            username = {chosenData.chosenUser.username}
        />
        <Card
          element = {
            <AllPhotosContent
              album = {chosenData.chosenAlbum}
              photos = {chosenData.chosenPhotos}
            />
          }
          clickable = { false }
          cardSize = 'full'
        />
    </div>
  )
}

export default AlbumPhotoPage

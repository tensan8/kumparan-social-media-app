import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { UserModel } from '../../../domain/models/User'
import Navbar from '../../common/molecules/Navbar'
import ProfileHead from '../../common/molecules/ProfileHead'

const AlbumPhotoPage = (): JSX.Element => {
  const chosenData = useLocation().state as {chosenUser: UserModel}

  return (
    <div className="block pb-10">
        <Navbar
            backArrowAvailable = {true}
        />
        <ProfileHead
            username = {chosenData.chosenUser.username}
        />
        <p>Album Detail</p>
        {/* <AllPhotosCard cardSize = {chosenData.cardSize}
            title = {chosenData.chosenAlbum.title}
            photos = {chosenData.photos}
            username = {chosenData.chosenUser.username}
        /> */}
    </div>
  )
}

export default AlbumPhotoPage

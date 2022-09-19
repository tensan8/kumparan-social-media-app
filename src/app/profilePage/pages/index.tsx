import Navbar from '../../common/molecules/Navbar'
import * as React from 'react'
import ProfileHead from '../../common/molecules/ProfileHead'
import Card from '../../common/atoms/Card'
import ContactDetailContent from '../../common/atoms/ContactDetailContent'
import { useLocation } from 'react-router-dom'
import { UserModel } from '../../../domain/models/User'
import AlbumThumbnails from '../../common/atoms/AlbumThumbnails'
import { useProfilePageAlbumsThumbnailsViewModel } from '../viewModels/ProfilePageAlbumsThumbnailsViewModel'

const ProfilePage = (): JSX.Element => {
  const chosenData = useLocation().state as {chosenUser: UserModel}

  const { albumThumbnailSources } = useProfilePageAlbumsThumbnailsViewModel(1)

  return (
        <div className="block pb-10">
            <Navbar
                backArrowAvailable = {true}
            />
            <ProfileHead username = {'Someone'}/>
            <Card
              element={
                <ContactDetailContent
                  user = {chosenData.chosenUser}
                />
              }
              clickable={false}
              cardSize = 'full'
              extraStyling='mt-0'
            />
            <Card
              element = {
                <AlbumThumbnails
                  thumbnailSource = {albumThumbnailSources}
                />}
              clickable = {false}
              cardSize = 'full'
              extraStyling = 'pb-12'
            />
        </div>
  )
}

export default ProfilePage

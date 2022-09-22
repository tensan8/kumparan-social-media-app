import Navbar from '../../common/molecules/Navbar'
import * as React from 'react'
import ProfileHead from '../../common/molecules/ProfileHead'
import Card from '../../common/atoms/Card'
import ContactDetailContent from '../../common/atoms/ContactDetailContent'
import { useLocation } from 'react-router-dom'
import { UserModel } from '../../../domain/models/User'
import AlbumThumbnails from '../../common/atoms/AlbumThumbnails'
import { useProfilePageAlbumsListViewModel } from '../viewModels/ProfilePageAlbumsListViewModel'

const ProfilePage = (): JSX.Element => {
  const chosenData = useLocation().state as {chosenUser: UserModel}

  const { albums } = useProfilePageAlbumsListViewModel(chosenData.chosenUser.id)

  return (
        <div className="block pb-10">
            <Navbar
                backArrowAvailable = {true}
            />
            <ProfileHead
              username = {chosenData.chosenUser.username}
            />
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
                albums != null && albums.length > 0
                  ? <AlbumThumbnails
                      albums={albums}
                      user={chosenData.chosenUser}
                    />
                  : <p>Loading...</p>
              }
              clickable = {false}
              cardSize = 'full'
              extraStyling = 'pb-12'
            />
        </div>
  )
}

export default ProfilePage

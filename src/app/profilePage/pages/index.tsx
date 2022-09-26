import Navbar from '../../common/molecules/Navbar'
import * as React from 'react'
import ProfileHead from '../../common/molecules/ProfileHead'
import Card from '../../common/atoms/Card'
import ContactDetailContent from '../../common/atoms/ContactDetailContent'
import { useLocation } from 'react-router-dom'
import { useProfilePageAlbumsListViewModel } from '../viewModels/ProfilePageAlbumsListViewModel'
import AlbumContents from '../../common/molecules/AlbumContents'
import { useProfilePageUserInfoViewModel } from '../viewModels/ProfilePageUserInfoViewModel'

const ProfilePage = (): JSX.Element => {
  const params = new URLSearchParams(useLocation().search)

  const { albums } = useProfilePageAlbumsListViewModel(Number(params.get('userId')))
  const { user } = useProfilePageUserInfoViewModel(Number(params.get('userId')))

  return (
        <div className="block pb-10">
            <Navbar
                backArrowAvailable = {true}
            />
            <ProfileHead
              username = {user?.username ?? ''}
            />
            <Card
              element={
                user != null
                  ? <ContactDetailContent
                      user = {user}
                    />
                  : <div></div>
              }
              clickable={false}
              cardSize = 'full'
              extraStyling='mt-0'
            />
            <Card
              element = {
                albums != null && albums.length > 0
                  ? <AlbumContents
                      albums={albums}
                      username={user?.username ?? ''}
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

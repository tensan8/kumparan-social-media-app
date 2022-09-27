import * as React from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../../../Common/Atoms/card'
import ContactDetailContent from '../../../Common/Atoms/contactDetailContent'
import AlbumContents from '../../../Common/Molecules/albumContents'
import Navbar from '../../../Common/Molecules/navbar'
import NotFoundPlaceholder from '../../../Common/Molecules/notFoundPlaceholder'
import ProfileHead from '../../../Common/Molecules/profileHead'
import { useProfilePageAlbumsListViewModel } from '../ViewModels/profilePageAlbumsListViewModel'
import { useProfilePageUserInfoViewModel } from '../ViewModels/profilePageUserInfoViewModel'

const ProfilePage = (): JSX.Element => {
  const params = new URLSearchParams(useLocation().search)

  const { albums } = useProfilePageAlbumsListViewModel(Number(params.get('userId')))
  const { user } = useProfilePageUserInfoViewModel(Number(params.get('userId')))

  return (
    params.get('userId') != null
      ? <div className="block pb-10">
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
      : <NotFoundPlaceholder />
  )
}

export default ProfilePage

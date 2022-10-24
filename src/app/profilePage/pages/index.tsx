import Navbar from '../../common/molecules/navbar'
import * as React from 'react'
import ProfileHead from '../../common/molecules/profileHead'
import Card from '../../common/atoms/card'
import ContactDetailContent from '../../common/atoms/contactDetailContent'
import { useLocation } from 'react-router-dom'
import { useProfilePageAlbumsListViewModel } from '../viewModels/profilePageAlbumsListViewModel'
import AlbumContents from '../../common/molecules/albumContents'
import { useProfilePageUserInfoViewModel } from '../viewModels/profilePageUserInfoViewModel'
import NotFoundPlaceholder from '../../common/molecules/notFoundPlaceholder'

const ProfilePage = (): JSX.Element => {
  const params = new URLSearchParams(useLocation().search)

  const { albums } = useProfilePageAlbumsListViewModel(Number(params.get('userId')))
  const { user } = useProfilePageUserInfoViewModel(Number(params.get('userId')))

  return (
    user != null
      ? <div className="block pb-10">
          <Navbar
              backArrowAvailable = {true}
          />
          <ProfileHead
            username = {user?.username ?? ''}
          />
          <Card
            element = {
              <ContactDetailContent
                user = {user}
              />
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
                    user={user}
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

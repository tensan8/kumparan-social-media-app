import Navbar from '../../common/molecules/Navbar'
import * as React from 'react'
import ProfileHead from '../../common/molecules/ProfileHead'
import Card from '../../common/atoms/Card'
import ContactDetailContent from '../../common/atoms/ContactDetailContent'
import { useLocation } from 'react-router-dom'
import { UserModel } from '../../../domain/models/User'
import AlbumThumbnails from '../../common/atoms/AlbumThumbnails'

const ProfilePage = (): JSX.Element => {
  const chosenData = useLocation().state as {chosenUser: UserModel}

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
                  // albumList = {props.albumList}
                  // photosList = {props.photosList}
                  // chosenUser = {props.chosenUser}
                  // cardSize = {props.cardSize}
                />}
              clickable = {false}
              cardSize = 'full'
              extraStyling = 'pb-12'
            />
        </div>
  )
}

export default ProfilePage

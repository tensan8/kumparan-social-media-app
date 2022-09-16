import Navbar from '../../common/molecules/Navbar'
import * as React from 'react'
import ProfileHead from '../../common/molecules/ProfileHead'
import Card from '../../common/atoms/Card'
import ContactDetailContent from '../../common/atoms/ContactDetailContent'
import { useLocation } from 'react-router-dom'
import { UserModel } from '../../../domain/models/User'

const ProfilePage = (): JSX.Element => {
  const chosenData = useLocation().state as {chosenUser: UserModel}

  return (
        <div className="block pb-10">
            <Navbar
                backArrowAvailable = {true}
            />
            <ProfileHead username = {'Someone'}/>
            <Card
              element={<ContactDetailContent user = {chosenData.chosenUser}/>}
              clickable={false}
              extraStyling='mt-0'
            />
            {/* <ContactDetail chosenUser = {chosenUser} cardSize = {props.cardSize}/>
            <AlbumsCard cardSize = {props.cardSize} albumList = {albumsList} photosList = {photosList} chosenUser = {chosenUser}/> */}
        </div>
  )
}

export default ProfilePage

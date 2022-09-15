import Navbar from '../../common/molecules/Navbar'
import * as React from 'react'
import ProfileHead from '../../common/molecules/ProfileHead'

const ProfilePage = (): JSX.Element => {
  return (
        <div className="block pb-10">
            <Navbar
                backArrowAvailable = {true}
            />
            <ProfileHead username = {'Someone'}/>
            {/* <ContactDetail chosenUser = {chosenUser} cardSize = {props.cardSize}/>
            <AlbumsCard cardSize = {props.cardSize} albumList = {albumsList} photosList = {photosList} chosenUser = {chosenUser}/> */}
        </div>
  )
}

export default ProfilePage

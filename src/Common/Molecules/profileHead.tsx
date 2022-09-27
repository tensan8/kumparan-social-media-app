import * as React from 'react'
import UserIcon from '../../assets/user.png'

interface ProfileHeadProps {
  username: string
}

const ProfileHead = (props: ProfileHeadProps): JSX.Element => {
  return (
    <div className="block -translate-y-16 bg-white w-full h-52 drop-shadow">
        <div className="flex h-full w-full">
            <div className="flex my-auto w-fit pt-16 pl-10">
                <img src={UserIcon} alt = "User Icon" className = "w-12 h-12 mr-5" />
                <div className="block h-max my-auto">
                    <h2 className="h-fit self-center font-bold text-2xl">{props.username}</h2>
                    <div className="w-full bg-red h-1"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default React.memo(ProfileHead)

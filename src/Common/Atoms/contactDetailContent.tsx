import * as React from 'react'
import TitleHeading from './titleHeading'
import { UserModel } from '../../Domain/Models/user'
import { MapUserInfoDetail } from '../Mappers/userInfoDetailMapper'

interface ContactDetailContentProps {
  user: UserModel
}

const ContactDetailContent = (props: ContactDetailContentProps): JSX.Element => {
  return (
    <div>
        <TitleHeading
            text = 'Contact Detail'
            style = 'big'
        />
        {Array.from(MapUserInfoDetail(props.user)).map((data, index) => {
          return (
            <p key={index}>
                <span className='font-bold'>{data[0]}: </span>{data[1]}
            </p>
          )
        })}
    </div>
  )
}

export default React.memo(ContactDetailContent)

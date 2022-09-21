import * as React from 'react'
import TitleHeading from './TitleHeading'
import { UserModel } from '../../../domain/models/User'
import { MapUserInfoDetail } from '../mappers/UserInfoDetailMapper'

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

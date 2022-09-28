import * as React from 'react'
import { PhotoModel } from '../../../domain/models/photo'
import TwoColorTitleHeading from '../molecules/twoColorTitleHeading'
import TitleHeading from './titleHeading'

interface EnlargedPhotoContentProps {
  albumTitle: string
  chosenPhoto: PhotoModel
}

const EnlargedPhotoContent = (props: EnlargedPhotoContentProps): JSX.Element => {
  return (
    <div className="block w-full">
        <TwoColorTitleHeading
            firstText = "Album:"
            secondText = {props.albumTitle}
        />
        <TitleHeading
            text = {props.chosenPhoto.title}
            style = 'big'
        />
        <div className="flex w-full">
            <img
                src={props.chosenPhoto.url}
                alt={props.chosenPhoto.title}
                className="mt-5 mx-auto"
            />
        </div>
    </div>
  )
}

export default React.memo(EnlargedPhotoContent)

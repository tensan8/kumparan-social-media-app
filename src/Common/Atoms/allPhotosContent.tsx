import * as React from 'react'
import TwoColorTitleHeading from '../Molecules/twoColorTitleHeading'
import { BaseAlbumPhotosList } from '../Utils/baseAlbumPhotosList'
import ThumbnailWithTitle from './thumbnailWithTitle'

interface AllPhotosContentProps extends BaseAlbumPhotosList { }

const AllPhotosContent = (props: AllPhotosContentProps): JSX.Element => {
  return (
    <div className="block w-full">
        <TwoColorTitleHeading
            firstText = "Album:"
            secondText = {props.album.title}
        />

        <div className="grid grid-cols-5 gap-4">
            {props.photos.map((photo, index) => {
              return (
                <div className={index % 3 === 0 ? 'row-span-2' : ''} key = {index}>
                    <ThumbnailWithTitle
                        thumbnailUrl = {photo.thumbnailUrl}
                        text = {photo.title}
                    />
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default React.memo(AllPhotosContent)

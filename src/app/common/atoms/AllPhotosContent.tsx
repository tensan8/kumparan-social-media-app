// const { useNavigate } = require("react-router-dom")
import * as React from 'react'
import { AlbumModel } from '../../../domain/models/Album'
import { PhotoModel } from '../../../domain/models/Photo'
import TwoColorTitleHeading from '../molecules/TwoColorTitleHeading'

interface AllPhotosContentProps {
  album: AlbumModel
  photos: PhotoModel[]
}

const AllPhotosContent = (props: AllPhotosContentProps): JSX.Element => {
  // const navigate = useNavigate()

  // const photoClickCallback = React.useCallback(() => {
  //     console.log("Called")
  // })

  return (
    <div className="block w-full">
        <TwoColorTitleHeading
            firstText = "Album:"
            secondText = {props.album.title}
        />

        {/* <div className="grid grid-cols-5 gap-4">
            {props.photos.map((photo, index) => {
              if (index % 3 === 0) {
                return (
                        <div className="row-span-2" key = {index}>
                            <ThumbnailWithTitle thumbnailSource = {photo.thumbnailUrl}
                                title = {photo.title}
                                onThumbnailClick = {() => enlargePhoto(photo)}
                            />
                        </div>
                )
              }
              return (
                    <ThumbnailWithTitle thumbnailSource = {photo.thumbnailUrl}
                        title = {photo.title}
                        onThumbnailClick = {() => enlargePhoto(photo)}
                        key = {index}
                    />
              )
            })}
        </div> */}
    </div>
  )
}

export default React.memo(AllPhotosContent)

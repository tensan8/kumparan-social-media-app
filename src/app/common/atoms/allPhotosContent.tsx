import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import TwoColorTitleHeading from '../molecules/twoColorTitleHeading'
import { BaseAlbumPhotosList } from '../utils/baseAlbumPhotosList'
import ThumbnailWithTitle from './thumbnailWithTitle'

interface AllPhotosContentProps extends BaseAlbumPhotosList { }

const AllPhotosContent = (props: AllPhotosContentProps): JSX.Element => {
  const navigate = useNavigate()

  const params = new URLSearchParams(useLocation().search)

  const photoClickCallback = React.useCallback(
    (photoId: number) => () => {
      navigate(`/enlarged-photo?userId=${params.get('userId') ?? ''}&albumId=${props.album.id}&photoId=${photoId}`)
    }, [])

  return (
    <div className="block w-full">
        <TwoColorTitleHeading
            firstText = "Album:"
            secondText = {props.album.title}
        />

        <div className="grid grid-cols-5 gap-4">
            {props.photos.map((photo, index) => {
              return (
                <div
                  className={index % 3 === 0 ? 'row-span-2' : ''}
                  key = {index}
                  onClick = {photoClickCallback(photo.id)}
                >
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

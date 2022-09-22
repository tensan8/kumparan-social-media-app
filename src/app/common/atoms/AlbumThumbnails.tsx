import * as React from 'react'
import { AlbumModel } from '../../../domain/models/Album'
import { UserModel } from '../../../domain/models/User'
import ThumbnailWithTitle from './ThumbnailWithTitle'
import TitleHeading from './TitleHeading'

interface AlbumThumbnailsProps {
  albums: AlbumModel[]
  user: UserModel
}

const AlbumThumbnails = (props: AlbumThumbnailsProps): JSX.Element => {
  return (
        <div className="w-full">
            <TitleHeading
                text = 'Albums'
                style = 'big'
            />

            <div className="grid grid-cols-5 gap-2 w-full">
                {props.albums.map((album, index) => {
                  return (
                    <ThumbnailWithTitle
                        text = {album.title}
                        album = {album}
                        user = {props.user}
                        key = {index}
                    />
                  )
                })}
            </div>
        </div>
  )
}

export default React.memo(AlbumThumbnails)

import * as React from 'react'
import { BaseAlbumsPhotos } from '../utils/BaseAlbumsPhotos'
import ThumbnailWithTitle from './ThumbnailWithTitle'
import TitleHeading from './TitleHeading'

interface AlbumThumbnailsProps extends BaseAlbumsPhotos { }

const AlbumThumbnails = (props: AlbumThumbnailsProps): JSX.Element => {
  return (
        <div className="w-full">
            <TitleHeading
                text = 'Albums'
                style = 'big'
            />

            <div className="grid grid-cols-5 gap-2 w-full">
                <ThumbnailWithTitle
                    text = 'testing'
                    thumbnailSource = {props.thumbnailSource}
                />

                {/* {props.photosList.length === props.albumList.length ?
                    props.albumList.map((album, index) => {
                        return(
                            <ThumbnailWithTitle
                                title = {album.title}
                                thumbnailSource = {props.photosList[index][0].thumbnailUrl}
                                customStyling = "h-44"
                                key={index}
                                onThumbnailClick = {() => onThumbnailClick(album, props.photosList[index])}
                            />
                        )
                    })
                :
                    <p>Loading...</p>
                } */}
            </div>
        </div>
  )
}

export default React.memo(AlbumThumbnails)

// function AlbumThumbnails(props) {
//     let navigate = useNavigate();

//     const onThumbnailClick = (album, fullPhotos) => {
//         navigate("/album-photos", {state: {
//             chosenUser: props.chosenUser,
//             cardSize: props.cardSize,
//             chosenAlbum: album,
//             photos: fullPhotos,
//         }})
//     };
// }

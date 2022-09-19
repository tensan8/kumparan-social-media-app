import * as React from 'react'
import ThumbnailWithTitle from './ThumbnailWithTitle'
import TitleHeading from './TitleHeading'

// const interface AlbumThumbnailsProps {

// }

const AlbumThumbnails = (): JSX.Element => {
  return (
        <div className="w-full">
            <TitleHeading
                text = 'Albums'
                style = 'big'
            />

            <div className="grid grid-cols-5 gap-2 w-full">
                <ThumbnailWithTitle
                    text = 'testing'
                    thumbnailSource = 'https://i.pinimg.com/564x/40/a9/9c/40a99c5334e8c77058b9f97c3612b896.jpg'
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

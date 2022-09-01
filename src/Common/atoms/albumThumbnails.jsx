import ThumbnailWithTitle from "./thumbnailWithTitle";
import TitleHeading from "./titleHeading";
import { useNavigate } from 'react-router-dom';

function AlbumThumbnails(props) {
    let navigate = useNavigate();

    const onThumbnailClick = (album, fullPhotos) => {
        navigate("/album-photos", {state: {
            chosenUser: props.chosenUser,
            cardSize: props.cardSize,
            chosenAlbum: album,
            photos: fullPhotos,
        }})
    };

    return(
        <div className="w-full">
            <TitleHeading title = "Albums" extraStyling = "text-xl mb-1"/>

            <div className="grid grid-cols-5 gap-2 w-full">
                {props.photosList.length === props.albumList.length ? 
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
                }
            </div>
        </div>
    )
}

export default AlbumThumbnails;
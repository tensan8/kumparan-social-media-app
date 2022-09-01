import TwoColorTitleHeading from "../molecules/twoColorTitleHeading";
import ThumbnailWithTitle from "./thumbnailWithTitle";
import { useNavigate } from 'react-router-dom';

function AllPhotosContent(props) {
    let navigate = useNavigate();

    const enlargePhoto = (chosenPhoto) => {
        navigate("/enlarged-photo", {state: {
            username: props.username,
            cardSize: props.cardSize,
            albumTitle: props.title,
            chosenPhoto: chosenPhoto
        }})
    }

    return(
        <div className="block w-full">
            <TwoColorTitleHeading firstText = "Album:" secondText = {props.title} />

            <div className="grid grid-cols-5 gap-4">
                {props.photos.map((photo, index) => {
                    if(index % 3 === 0) {
                        return(
                            <div className="row-span-2"  key = {index}>
                                <ThumbnailWithTitle thumbnailSource = {photo.thumbnailUrl} 
                                    title = {photo.title}
                                    onThumbnailClick = {() => enlargePhoto(photo)}
                                />
                            </div>
                        )
                    }
                    return(
                        <ThumbnailWithTitle thumbnailSource = {photo.thumbnailUrl} 
                            title = {photo.title}
                            onThumbnailClick = {() => enlargePhoto(photo)}
                            key = {index} 
                        />
                    )
                })}
            </div>
            
        </div>
    )
}

export default AllPhotosContent;
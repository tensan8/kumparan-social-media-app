import ThumbnailWithTitle from "./thumbnailWithTitle";
import TitleHeading from "./titleHeading";

function AlbumThumbnails(props) {
    return(
        <div className="w-full">
            <TitleHeading title = "Albums" extraStyling = "text-xl mb-1"/>

            <div className="grid grid-cols-5 gap-2 w-full">
                {props.photosList.length === props.albumList.length ? 
                    props.albumList.map((album, index) => {
                        return(
                            <ThumbnailWithTitle album = {album}
                                fullPhotos = {props.photosList[index]}
                                title = {album.title}
                                thumbnailSource = {props.photosList[index][0].thumbnailUrl} 
                                chosenUser = {props.chosenUser} 
                                cardSize = {props.cardSize}
                                customStyling = "h-44"
                                key={index}
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
import ThumbnailWithTitle from "./thumbnailWithTitle";
import TitleHeading from "./titleHeading";

function AlbumThumbnails(props) {
    return(
        <div className="w-full">
            <TitleHeading title = "Albums" extraStyling = "text-xl mb-1"/>

            <div className="grid grid-cols-5 gap-1 w-full">
                {props.photosList.length === props.albumList.length ? 
                    props.albumList.map((album, index) => {
                        return(
                            <ThumbnailWithTitle albumTitle = {album.title} thumbnailSource = {props.photosList[index][0].thumbnailUrl} key={index}/>
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
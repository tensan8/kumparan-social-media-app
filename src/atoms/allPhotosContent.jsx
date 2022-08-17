import ThumbnailWithTitle from "./thumbnailWithTitle";
import TitleHeading from "./titleHeading";

function AllPhotosContent(props) {
    console.log(props)

    return(
        <div className="block w-full">
            <div className="flex mb-1">
                <TitleHeading title = "Albums:" extraStyling = "text-xl mb-1" />
                <TitleHeading title = {props.albumTitle} extraStyling = "text-xl mb-1 text-teal pl-1" />
            </div>

            <div className="grid grid-cols-5 gap-3">
                {props.photos.map((photo, index) => {
                    if(index % 3 === 0) {
                        return(
                            <div className="row-span-2">
                                <ThumbnailWithTitle thumbnailSource = {photo.thumbnailUrl} title = {photo.title} key = {index}/>
                            </div>
                        )
                    }
                    return(
                        <ThumbnailWithTitle thumbnailSource = {photo.thumbnailUrl} title = {photo.title} key = {index}/>
                    )
                })}
            </div>
            
        </div>
    )
}

export default AllPhotosContent;
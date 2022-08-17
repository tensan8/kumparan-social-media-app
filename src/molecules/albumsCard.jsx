import AlbumThumbnails from "../atoms/albumThumbnails";
import Card from "../atoms/card";

function AlbumsCard(props) {
    return(
        <Card 
            cardContent = {<AlbumThumbnails />}
            cardSize = {props.cardSize}
        />
    )
}

export default AlbumsCard;
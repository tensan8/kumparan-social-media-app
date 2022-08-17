import AlbumThumbnails from "../atoms/albumThumbnails";
import Card from "../atoms/card";

function AlbumsCard(props) {
    return(
        <Card 
            cardContent = {<AlbumThumbnails albumList = {props.albumList} photosList = {props.photosList}/>}
            cardSize = {props.cardSize}
        />
    )
}

export default AlbumsCard;
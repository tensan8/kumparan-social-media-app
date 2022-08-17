import AllPhotosContent from "../atoms/allPhotosContent";
import Card from "../atoms/card";

function AllPhotosCard(props) {
    return(
        <Card cardContent = {<AllPhotosContent albumTitle = {props.albumTitle} photos = {props.photos}/>} cardSize = {`${props.cardSize} mt-0`}/>
    )
}

export default AllPhotosCard;
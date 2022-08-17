import AllPhotosContent from "../atoms/allPhotosContent";
import Card from "../atoms/card";

function AllPhotosCard(props) {
    return(
        <Card cardContent = {<AllPhotosContent title = {props.title} photos = {props.photos} username = {props.username} cardSize = {props.cardSize}/>} 
            cardSize = {`${props.cardSize} mt-0`}
        />
    )
}

export default AllPhotosCard;
import Card from "../atoms/card";
import LargePhotoContent from "../atoms/largePhotoContent";

function LargePhotoCard(props) {
    return (
        <Card cardContent = {<LargePhotoContent albumTitle = {props.albumTitle} chosenPhoto = {props.chosenPhoto}/>}
            cardSize = {`${props.cardSize} mt-0`}
        />
    )
}

export default LargePhotoCard;
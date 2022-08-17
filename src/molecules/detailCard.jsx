import DetailCardContent from "../atoms/detailCardContent";
import Card from "../atoms/card";

function DetailCard(props) {
    return(
        <Card cardSize = "w-2/3 h-max"
            cardContent = {
            <DetailCardContent title = {props.title} 
                content = {props.content} 
                commentUsername = {props.commentUsername} 
                commentBody = {props.commentBody}
            />
        }/>
    )
}

export default DetailCard;
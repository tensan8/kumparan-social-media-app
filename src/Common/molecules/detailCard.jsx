import DetailCardContent from "../atoms/detailCardContent";
import Card from "../atoms/card";

function DetailCard(props) {
    return(
        <Card cardSize = "w-2/3 h-max"
            cardContent = {
            <DetailCardContent title = {props.title} 
                content = {props.content}
                chosenUser = {props.chosenUser}
                commentsList = {props.commentsList}
            />
        }/>
    )
}

DetailCard.defaultProps = {
    commentsList: [],
}

export default DetailCard;
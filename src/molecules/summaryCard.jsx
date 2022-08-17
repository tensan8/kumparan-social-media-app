import Card from "../atoms/card";
import SummaryCardContent from "../atoms/summaryCardContent";
import { useNavigate } from "react-router-dom";

function SummaryCard(props) {
    let navigate = useNavigate();

    return (
        <Card clickable = {true}
            onCardClick = {() => {navigate("/post-detail", { state: {
                chosenUser: {'username': props.username, 'company': props.company},
                chosenPost: {'postId': props.postId, 'title': props.title, 'content': props.content}
            }})}}
            cardContent = {
                <SummaryCardContent title = {props.title}
                    username = {props.username}
                    company = {props.company}
                    content = {props.content}
                    numberOfComment = {props.numberOfComment}
                />
            }
        />
    )
}

export default SummaryCard;
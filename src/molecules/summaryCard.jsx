import Card from "../atoms/card";
import SummaryCardContent from "../atoms/summaryCardContent";
import { useNavigate } from "react-router-dom";

function SummaryCard(props) {
    let navigate = useNavigate();

    return (
        <Card clickable = {true}
            onCardClick = {() => {navigate("/post-detail", { state: {
                chosenUser: props.user,
                chosenPost: {'postId': props.postId, 'title': props.title, 'content': props.content}
            }})}}
            cardContent = {
                <SummaryCardContent title = {props.title}
                    username = {props.user.username}
                    company = {props.user.company.name}
                    content = {props.content}
                    numberOfComment = {props.numberOfComment}
                />
            }
        />
    )
}

export default SummaryCard;
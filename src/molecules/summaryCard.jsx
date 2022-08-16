import Card from "../atoms/card";
import SummaryCardContent from "../atoms/summaryCardContent";

function SummaryCard(props) {
    return (
        <Card cardContent = {
            <SummaryCardContent title = {props.title}
                username = {props.username}
                company = {props.company}
                content = {props.content}
                numberOfComment = {props.numberOfComment}
            />
        }/>
    )
}

export default SummaryCard;
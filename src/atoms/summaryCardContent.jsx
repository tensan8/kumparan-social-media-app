import commentIcon from '../assets/comment.png';
import ContentText from './contentText';
import TitleHeading from './titleHeading';
import VerticalRedBar from './verticalRedBar';

function SummaryCardContent(props) {
    return(
        <div className="flex flex-col h-full w-full">
            <TitleHeading title = {props.title} />

            <div className="flex mt-2 h-6">
                <VerticalRedBar />
                <p className="font-heebo text-gray text-sm self-center">{props.username} ({props.company})</p>
            </div>

            <ContentText content = {props.content} />

            <div className='flex'>
                <img src={commentIcon} alt="Comment Icon" className="w-5 h-5 my-auto" />
                <p className='pl-2 h-full my-auto text-sm mb-0.5'>{props.numberOfComment} comments</p>
            </div>
        </div>
    )
}

SummaryCardContent.defaultProps = {
    username: "Missing Username",
    company: "Missing Company",
    numberOfComment: 0,
}

export default SummaryCardContent;
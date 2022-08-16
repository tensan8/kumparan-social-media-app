import commentIcon from '../assets/comment.png';

function SummaryCardContent(props) {
    return(
        <div className="flex flex-col h-full w-full">
            <h1 className="text-2xl font-bold">{props.title}</h1>

            <div className="flex mt-0.5 h-6">
                <div className="h-full w-1 bg-red">&#8203;</div>
                <p className="pl-2 font-heebo text-gray text-sm self-center">{props.username} ({props.company})</p>
            </div>

            <p className="mt-2 mb-2 w-full grow">{props.content}</p>

            <div className='flex'>
                <img src={commentIcon} alt="Comment Icon" className="w-5 h-5 my-auto" />
                <p className='pl-2 h-full my-auto text-sm mb-0.5'>{props.numberOfComment} comments</p>
            </div>
        </div>
    )
}

SummaryCardContent.defaultProps = {
    title: "Missing Title",
    username: "Missing Username",
    company: "Missing Company",
    content: "Missing Content Lorem Ipsum Dolor Sit Amet",
    numberOfComment: 0,
}

export default SummaryCardContent;
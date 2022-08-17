import TitleHeading from "./titleHeading";
import VerticalRedBar from "./verticalRedBar";
import ContentText from "./contentText";
import UserIcon from '../assets/user.png';
import { useNavigate } from 'react-router-dom';

function DetailCardContent(props) {
    let navigate = useNavigate();

    return(
        <div className="h-max">
            <div className="flex pb-5 cursor-pointer w-max h-fit" 
                onClick={() => {navigate("/profile", { state: props.chosenUser
            })}}
            >
                <img src={UserIcon} alt = "User Icon" className="w-9 h-9" />
                <div className="block pl-2 h-full my-auto pt-0.5">
                    <p className="text-xs text-gray font-heebo">{props.chosenUser.username}</p>
                    <p className="text-xs text-gray font-heebo">{props.chosenUser.company.name}</p>
                </div>
            </div>
            
            <TitleHeading title = {props.title} />
            <ContentText content = {props.content} />

            {props.commentsList.length !== 0 && props.commentsList.map((comment) => {
                return(
                    <div className="flex mt-6 h-max w-full" key={comment.id}>
                        <VerticalRedBar />
                        <p className="text-sm self-center">
                            <span className="font-bold">{comment.name}</span> {comment.body}
                        </p>
                    </div>
                )})
            }
        </div>
    )
}

DetailCardContent.defaultProps = {
    username: "Missing Username",
    company: "Missing Company"
}

export default DetailCardContent;
import TitleHeading from "./titleHeading";
import VerticalRedBar from "./verticalRedBar";
import ContentText from "./contentText";
import UserIcon from '../assets/user.png';


function DetailCardContent(props) {
    return(
        <div>
            <div className="flex pb-5 cursor-pointer w-max h-fit" onClick={() => {console.log("User Clicked")}}>
                <img src={UserIcon} alt = "User Icon" className="w-9 h-9" />
                <div className="block pl-2 h-full my-auto pt-0.5">
                    <p className="text-xs text-gray font-heebo">{props.username}</p>
                    <p className="text-xs text-gray font-heebo">{props.company}</p>
                </div>
            </div>
            
            <TitleHeading title = {props.title} />
            <ContentText content = {props.content} />

            {props.commentUsername != null ?
                <div className="flex mt-6 h-6">
                    <VerticalRedBar />
                    <p className="text-sm self-center">
                        <span className="font-bold">{props.commentUsername}</span> {props.commentBody}
                    </p>
                </div>
            : 
                null
            }
            
        </div>
    )
}

DetailCardContent.defaultProps = {
    username: "Missing Username",
    company: "Missing Company"
}

export default DetailCardContent;
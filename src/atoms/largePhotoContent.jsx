import TwoColorTitleHeading from "../molecules/twoColorTitleHeading";
import TitleHeading from "./titleHeading";

function LargePhotoContent(props) {
    return(
        <div className="block w-full">
            <TwoColorTitleHeading firstText = "Album:" secondText = {props.albumTitle} />
            <TitleHeading title = {props.chosenPhoto.title} extraStyling = "text-xl mb-1" />
            <div className="flex w-full">
                <img src={props.chosenPhoto.url} alt={props.chosenPhoto.title} className="mt-5 mx-auto"/>
            </div>
        </div>
    )
}

export default LargePhotoContent;
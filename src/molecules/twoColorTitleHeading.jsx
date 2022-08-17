import TitleHeading from "../atoms/titleHeading";

function TwoColorTitleHeading(props) {
    return(
        <div className="flex">
            <TitleHeading title = {props.firstText} extraStyling = "text-xl mb-1" />
            <TitleHeading title = {props.secondText} extraStyling = "text-xl mb-1 text-teal pl-1" />
        </div>
    )
}

TwoColorTitleHeading.defaultProps = {
    firstText: "Missing First Text",
    secondText: "Missing Second Text"
}

export default TwoColorTitleHeading;
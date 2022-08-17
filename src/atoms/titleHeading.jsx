
function TitleHeading(props) {
    return(
        <h1 className="text-2xl font-bold">{props.title}</h1>
    )
}

TitleHeading.defaultProps = {
    title: "Missing Title"
}

export default TitleHeading;
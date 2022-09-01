
function ContentText(props) {
    return(
        <p className="mt-2 mb-2 w-full grow">{props.content}</p>
    )
}

ContentText.defaultProps = {
    content: "Missing Content"
}

export default ContentText;
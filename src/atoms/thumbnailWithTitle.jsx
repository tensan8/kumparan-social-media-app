
function ThumbnailWithTitle(props) {
    return(
        <div className='w-40 h-40 mt-2'>
            <img src={props.thumbnailSource} alt="Thumbnail" className='object-cover w-full h-full rounded-xl' />
            <div className="-translate-y-16">
                <div className="w-full h-16 bg-black bg-gradient-to-t from-black opacity-40 blur-[0.09rem] rounded-b-xl"></div>
                <h2 className="-translate-y-14 mx-3 text-white font-medium text-[0.648rem]">{props.albumTitle}</h2>
            </div>
        </div>
    )
}

ThumbnailWithTitle.defaultProps = {
    albumTitle: "Missing Album Title",
    thumbnailSource: "",
}

export default ThumbnailWithTitle;
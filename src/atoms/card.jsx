

function Card(props) {
    return(
        <div className="flex w-full">
            <div className="flex bg-white rounded-xl drop-shadow w-2/3 h-72 mt-10 mx-auto px-10 py-8">
                {props.cardContent}
            </div>
        </div>
    )
}

Card.defaultProps = {
    cardContent: <div>&#8203;</div>
}

export default Card;
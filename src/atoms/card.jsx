
function Card(props) {
    return(
        <div className="flex w-full">
            <div className={`mt-10 ${props.cardSize} ${props.clickable ? 'cursor-pointer' : 'cursor'} flex bg-white rounded-xl drop-shadow mx-auto px-10 py-8`}
                 onClick={props.onCardClick}
            >
                {props.cardContent}
            </div>
        </div>
    )
}

Card.defaultProps = {
    cardContent: <div>&#8203;</div>,
    cardSize: "w-2/3 h-72", //Default size for summary cards
    clickable: false,
}

export default Card;
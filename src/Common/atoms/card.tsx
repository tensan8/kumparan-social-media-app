import * as React from 'react'

const cardSizeMap = {
  default: 'w-3/4 h-72'
} as const

type CardSize = keyof typeof cardSizeMap

interface CardProps {
  element: JSX.Element
  cardSize: CardSize
  clickable: boolean
  onCardClick?: (params: any) => any
}

const Card = (props: CardProps): JSX.Element => {
  return (
        <div
            className="flex w-full"
        >
            <div
                className={`mt-10 ${props.cardSize} ${props.clickable ? 'cursor-pointer' : 'cursor'} flex bg-white rounded-xl drop-shadow mx-auto px-10 py-8`}
                onClick={props.onCardClick}
            >
                {props.element}
            </div>
        </div>
  )
}

export default React.memo(Card)

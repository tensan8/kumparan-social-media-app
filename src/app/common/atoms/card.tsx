import * as React from 'react'

const cardSizeMap = {
  brief: 'w-3/4 h-72', // This one can be used for homepage card
  long: 'w-2/3 h-max' // This one for the detail card
} as const

type CardSize = keyof typeof cardSizeMap

interface CardProps {
  element: JSX.Element
  cardSize?: CardSize
  clickable: boolean
  onCardClick?: (params: any) => any
  extraStyling?: string
}

const Card = ({
  cardSize = 'brief',
  ...props
}: CardProps): JSX.Element => {
  return (
        <div className="flex w-full">
            <div
                className={`mt-10 ${cardSizeMap[cardSize]} ${props.clickable ? 'cursor-pointer' : 'cursor'} flex bg-white rounded-xl drop-shadow mx-auto px-10 py-8 ${props.extraStyling ?? ''}`}
                onClick={props.onCardClick}
            >
                {props.element}
            </div>
        </div>
  )
}

export default React.memo(Card)

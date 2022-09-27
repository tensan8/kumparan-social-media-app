import * as React from 'react'
import TitleHeading from '../atoms/titleHeading'

interface TwoColorTitleHeadingProps {
  firstText: string
  secondText: string
}

const TwoColorTitleHeading = (props: TwoColorTitleHeadingProps): JSX.Element => {
  return (
    <div className="flex">
        <TitleHeading
            text = {props.firstText}
            style = 'big'
        />
        <TitleHeading
            text = {props.secondText}
            style = 'bigTeal'
        />
    </div>
  )
}

export default React.memo(TwoColorTitleHeading)

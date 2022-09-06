import * as React from 'react'

interface TitleHeadingProps {
  text: string
  extraStyling: string
}

const TitleHeading = (props: TitleHeadingProps): JSX.Element => (
  <h1 className={`text-2xl font-bold ${props.extraStyling}`}>
    {props.text}
  </h1>
)

export default React.memo(TitleHeading)

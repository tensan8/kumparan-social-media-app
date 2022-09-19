import * as React from 'react'
import { BaseContent } from '../utils/BaseContent'

const titleHeadingMap = {
  big: 'text-xl mb-1',
  standard: ''
} as const

type TitleHeadingStyle = keyof typeof titleHeadingMap

interface TitleHeadingProps extends BaseContent {
  style?: TitleHeadingStyle
}

const TitleHeading = ({
  style = 'standard',
  ...props
}: TitleHeadingProps): JSX.Element => (
  <h1 className={`text-2xl font-bold ${style}`}>
    {props.text}
  </h1>
)

export default React.memo(TitleHeading)

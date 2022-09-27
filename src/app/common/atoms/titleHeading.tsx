import * as React from 'react'
import { BaseContent } from '../utils/baseContent'

const titleHeadingMap = {
  big: 'text-xl mb-1',
  standard: '',
  bigTeal: 'text-xl mb-1 text-teal pl-1'
} as const

type TitleHeadingStyle = keyof typeof titleHeadingMap

interface TitleHeadingProps extends BaseContent {
  style?: TitleHeadingStyle
}

const TitleHeading = ({
  style = 'standard',
  ...props
}: TitleHeadingProps): JSX.Element => (
  <h1 className={`text-2xl font-bold ${titleHeadingMap[style]}`}>
    {props.text}
  </h1>
)

export default React.memo(TitleHeading)

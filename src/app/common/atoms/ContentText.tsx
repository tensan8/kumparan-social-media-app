import * as React from 'react'
import { BaseContent } from '../utils/baseContent'

interface ContentTextProps extends BaseContent { }

const ContentText = (props: ContentTextProps): JSX.Element => {
  return (<p className='mt-2 mb-2 w-full grow'>{props.text}</p>)
}

export default React.memo(ContentText)

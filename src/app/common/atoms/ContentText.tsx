import * as React from 'react'

interface ContentTextProps {
  text: string
}

const ContentText = (props: ContentTextProps): JSX.Element => {
  return (<p className='mt-2 mb-2 w-full grow'>{props.text}</p>)
}

export default React.memo(ContentText)

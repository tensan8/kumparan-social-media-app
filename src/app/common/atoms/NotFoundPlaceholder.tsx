import * as React from 'react'

const NotFoundPlaceholder = (): JSX.Element => {
  return (
    <div>
        <p>Not Found</p>
    </div>
  )
}

export default React.memo(NotFoundPlaceholder)

import * as React from 'react'

const VerticalRedBar = (): JSX.Element => {
  return (
    <div className="min-h-full min-w-[0.2rem] bg-red mr-2">
        &#8203;
    </div>
  )
}

export default React.memo(VerticalRedBar)

import * as React from 'react'
import { BaseContent } from '../Utils/baseContent'

interface ThumbnailWithTitleProps extends BaseContent {
  thumbnailUrl: string
  clickCallback?: (params: any) => any
}

const ThumbnailWithTitle = (props: ThumbnailWithTitleProps): JSX.Element => {
  return (
    <div className={'w-full h-full mt-2 cursor-pointer'} onClick={props.clickCallback}>
        <img src={props.thumbnailUrl} alt="Thumbnail" className='object-cover w-full h-full rounded-xl' />
        <div className="-translate-y-16">
          <div className="w-full h-16 bg-black bg-gradient-to-t from-black opacity-40 blur-[0.09rem] rounded-b-xl"></div>
          <h2 className="-translate-y-14 mx-3 text-white font-medium text-[0.648rem]">{props.text}</h2>
        </div>
    </div>
  )
}

export default React.memo(ThumbnailWithTitle)

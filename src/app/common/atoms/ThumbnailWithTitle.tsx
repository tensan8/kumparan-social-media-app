import * as React from 'react'
import { BaseContent } from '../utils/BaseContent'

const thumbnailWithTitleStyleMap = {
  standard: 'h-20'
} as const

type ThumbnailWithTitleStyle = keyof typeof thumbnailWithTitleStyleMap

interface ThumbnailWithTitleProps extends BaseContent {
  style?: ThumbnailWithTitleStyle
  thumbnailSource: string
}

const ThumbnailWithTitle = ({
  style = 'standard',
  ...props
}: ThumbnailWithTitleProps): JSX.Element => {
//   const navigate = useNavigate()

  const clickCallback = React.useCallback(() => {
    console.log('Called')
  }, [])

  return (
    <div className={`w-full h-full mt-2 cursor-pointer ${style}`} onClick={clickCallback}>
        <img src={props.thumbnailSource} alt="Thumbnail" className='object-cover w-full h-full rounded-xl' />
        <div className="-translate-y-16">
            <div className="w-full h-16 bg-black bg-gradient-to-t from-black opacity-40 blur-[0.09rem] rounded-b-xl"></div>
            <h2 className="-translate-y-14 mx-3 text-white font-medium text-[0.648rem]">{props.text}</h2>
        </div>
    </div>
  )
}

export default React.memo(ThumbnailWithTitle)

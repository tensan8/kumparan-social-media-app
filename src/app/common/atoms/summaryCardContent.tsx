import * as React from 'react'
import ContentText from './contentText'
import TitleHeading from './titleHeading'
import VerticalRedBar from './verticalRedBar'
import { useAssets } from '../utils/assetsContext'

interface SummaryCardContentProps {
  title: string
  content: string
  username: string
  company: string
  numberOfComment: number
}

const SummaryCardContent = (props: SummaryCardContentProps): JSX.Element => {
  const assets = useAssets()

  return (
    <div className="flex flex-col h-full w-full">
        <TitleHeading
            text = {props.title}
        />

        <div className="flex mt-2 h-6">
            <VerticalRedBar />
            <p className="font-heebo text-gray text-sm self-center">
                {props.username} ({props.company})
            </p>
        </div>

        <ContentText
            text = {props.content}
        />

        <div className='flex'>
            <img
                src={assets.getAsset('comment')}
                alt="Comment Icon"
                className="w-5 h-5 my-auto"
            />
            <p className='pl-2 h-full my-auto text-sm mb-0.5'>
                {props.numberOfComment} comments
            </p>
        </div>
    </div>
  )
}

export default React.memo(SummaryCardContent)

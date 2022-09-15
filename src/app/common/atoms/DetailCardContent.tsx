import * as React from 'react'
import VerticalRedBar from './VerticalRedBar'
import UserIcon from '../../../assets/user.png'
import TitleHeading from './TitleHeading'
import ContentText from './ContentText'
import { UserModel } from '../../../domain/models/User'
import { PostModel } from '../../../domain/models/Post'
import { CommentModel } from '../../../domain/models/Comment'

interface DetailCardContentProps {
  chosenUser: UserModel
  chosenPost: PostModel
  commentsList: CommentModel[] | null
}

const DetailCardContent = (props: DetailCardContentProps): JSX.Element => {
  return (
    <div className="h-max">
        <div className="flex pb-5 cursor-pointer w-max h-fit">
            <img src={UserIcon} alt = "User Icon" className="w-9 h-9" />
            <div className="block pl-2 h-full my-auto pt-0.5">
                <p className="text-xs text-gray font-heebo">{props.chosenUser.username}</p>
                <p className="text-xs text-gray font-heebo">{props.chosenUser.company.get('name')}</p>
            </div>
        </div>

        <TitleHeading
            text = {props.chosenPost.title}
        />
        <ContentText
            text = {props.chosenPost.body}
        />

        {props.commentsList != null && props.commentsList.length > 0
          ? props.commentsList.map((comment: CommentModel) => {
            return (
                <div className="flex mt-6 h-max w-full" key={comment.id}>
                    <VerticalRedBar />
                    <p className="text-sm self-center">
                        <span className="font-bold">{comment.name}</span> {comment.body}
                    </p>
                </div>
            )
          })
          : <div></div>
        }
    </div>
  )
}

export default React.memo(DetailCardContent)

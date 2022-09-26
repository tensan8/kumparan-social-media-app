import * as React from 'react'
import VerticalRedBar from './VerticalRedBar'
import UserIcon from '../../../assets/user.png'
import TitleHeading from './TitleHeading'
import ContentText from './ContentText'
import { CommentModel } from '../../../domain/models/Comment'
import { useLocation, useNavigate } from 'react-router-dom'
import { useProfilePageUserInfoViewModel } from '../../profilePage/viewModels/ProfilePageUserInfoViewModel'
import { useDetailPagePostViewModel } from '../../postDetail/viewModels/DetailPagePostViewModel'

interface DetailCardContentProps {
  commentsList: CommentModel[] | null
}

const DetailCardContent = (props: DetailCardContentProps): JSX.Element => {
  const navigate = useNavigate()

  const params = new URLSearchParams(useLocation().search)

  const { user } = useProfilePageUserInfoViewModel(Number(params.get('userId')))
  const { post } = useDetailPagePostViewModel(Number(params.get('postId')))

  const profileClickCallback = React.useCallback(() => {
    navigate(`/profile?userId=${Number(params.get('userId'))}`)
  }, [])

  return (
    <div className="h-max">
        <div
          className="flex pb-5 cursor-pointer w-max h-fit"
          onClick={profileClickCallback}
        >
            <img src={UserIcon} alt = "User Icon" className="w-9 h-9" />
            <div className="block pl-2 h-full my-auto pt-0.5">
                <p className="text-xs text-gray font-heebo">{user?.username}</p>
                <p className="text-xs text-gray font-heebo">{user?.company.get('name')}</p>
            </div>
        </div>

        <TitleHeading
            text = {post?.title ?? ''}
        />
        <ContentText
            text = {post?.body ?? ''}
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

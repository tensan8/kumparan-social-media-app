import * as React from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../../common/atoms/Card'
import DetailCardContent from '../../common/atoms/DetailCardContent'
import Navbar from '../../common/molecules/Navbar'
import { useDetailPageCommentsViewModel } from '../viewModels/DetailPageCommentsViewModel'
import { useDetailPagePostViewModel } from '../viewModels/DetailPagePostViewModel'
import { useDetailPageUserInfoViewModel } from '../viewModels/DetailPageUserInfoViewModel'

const PostDetail = (): JSX.Element => {
  const params = new URLSearchParams(useLocation().search)

  const { commentsList } = useDetailPageCommentsViewModel(Number(params.get('postId')))
  const { user } = useDetailPageUserInfoViewModel(Number(params.get('userId')))
  const { post } = useDetailPagePostViewModel(Number(params.get('postId')))

  return (
    <div className='block pb-10'>
        <Navbar
            backArrowAvailable={true}
        />
        <Card
          element = {
            <DetailCardContent
              commentsList= {commentsList}
              user = {user}
              post = {post}
            />
          }
          cardSize='long'
          clickable = {false}
        />
    </div>
  )
}

export default PostDetail

import * as React from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../../../Common/Atoms/card'
import DetailCardContent from '../../../Common/Atoms/detailCardContent'
import Navbar from '../../../Common/Molecules/navbar'
import NotFoundPlaceholder from '../../../Common/Molecules/notFoundPlaceholder'
import { useDetailPageCommentsViewModel } from '../viewModels/detailPageCommentsViewModel'
import { useDetailPagePostViewModel } from '../viewModels/detailPagePostViewModel'
import { useDetailPageUserInfoViewModel } from '../viewModels/detailPageUserInfoViewModel'

const PostDetail = (): JSX.Element => {
  const params = new URLSearchParams(useLocation().search)

  const { commentsList } = useDetailPageCommentsViewModel(Number(params.get('postId')))
  const { user } = useDetailPageUserInfoViewModel(Number(params.get('userId')))
  const { post } = useDetailPagePostViewModel(Number(params.get('postId')))

  return (
    params.get('userId') != null && params.get('postId') != null
      ? <div className='block pb-10'>
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
      : <NotFoundPlaceholder />
  )
}

export default PostDetail

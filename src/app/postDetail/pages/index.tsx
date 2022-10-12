import * as React from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../../common/atoms/card'
import DetailCardContent from '../../common/atoms/detailCardContent'
import NotFoundPlaceholder from '../../common/molecules/notFoundPlaceholder'
import Navbar from '../../common/molecules/navbar'
import { useDetailPageCommentsViewModel } from '../viewModels/detailPageCommentsViewModel'
import { useDetailPagePostViewModel } from '../viewModels/detailPagePostViewModel'
import { useDetailPageUserInfoViewModel } from '../viewModels/detailPageUserInfoViewModel'

const PostDetail = (): JSX.Element => {
  const params = new URLSearchParams(useLocation().search)

  const { commentsList } = useDetailPageCommentsViewModel(Number(params.get('postId')))
  const { user } = useDetailPageUserInfoViewModel(Number(params.get('userId')))
  const { post } = useDetailPagePostViewModel(Number(params.get('postId')))

  console.log(post)

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

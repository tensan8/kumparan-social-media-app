import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { PostModel } from '../../../domain/models/Post'
import { UserModel } from '../../../domain/models/User'
import Card from '../../common/atoms/Card'
import DetailCardContent from '../../common/atoms/DetailCardContent'
import Navbar from '../../common/molecules/Navbar'
import { useDetailPageCommentsViewModel } from '../viewModels/DetailPageCommentsViewModel'

const PostDetail = (): JSX.Element => {
  const chosenData = useLocation().state as {chosenUser: UserModel, chosenPost: PostModel}

  const { commentsList } = useDetailPageCommentsViewModel(chosenData.chosenPost.id)

  return (
    <div className='block pb-10'>
        <Navbar
            backArrowAvailable={true}
        />
        <Card
          element = {
            <DetailCardContent
              chosenUser= {chosenData.chosenUser}
              chosenPost= {chosenData.chosenPost}
              commentsList= {commentsList}
            />
          }
          cardSize='long'
          clickable = {false}
        />
    </div>
  )
}

export default PostDetail

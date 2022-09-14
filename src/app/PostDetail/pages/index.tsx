import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { PostModel } from '../../../domain/models/Post'
import { UserModel } from '../../../domain/models/User'
import Card from '../../common/atoms/Card'
import DetailCardContent from '../../common/atoms/DetailCardContent'
import Navbar from '../../common/molecules/Navbar'

const PostDetail = (): JSX.Element => {
  const chosenData = useLocation().state as {chosenUser: UserModel, chosenPost: PostModel}

  return (
    <div className='block pb-10'>
        <Navbar
            backArrowAvailable={true}
        />
        <Card
          element = {
            <DetailCardContent
              title = 'testing'
              content = 'testing'
              chosenUser= {chosenData.chosenUser}
              chosenPost= {chosenData.chosenPost}
            />
          }
          clickable = {true}
          onCardClick = {() => { return (null) }}
        />
    </div>
  )
}

export default PostDetail

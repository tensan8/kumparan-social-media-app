import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../common/molecules/navbar'
import PostCardList from '../../common/molecules/postCardList'
import { useHomepageCommentViewModel } from '../viewModels/HomepageCommentViewModel'
import { useHomepagePostsViewModel } from '../viewModels/HomepagePostsViewModel'
import { useHomepageUsersViewModel } from '../viewModels/HomepageUsersViewModel'

const Homepage = (): JSX.Element => {
  const navigate = useNavigate()

  const handleHomepageCardClicked = React.useCallback(() => {
    navigate('/post-detail')
  }, [navigate])

  const { allPosts } = useHomepagePostsViewModel()
  const { allUsers } = useHomepageUsersViewModel()
  const { allComments } = useHomepageCommentViewModel()

  return (
        <div>
            <Navbar
                backArrowAvailable = {false}
            />

            <PostCardList
              postList = {allPosts}
              clickCallback = {handleHomepageCardClicked}
              usersList = {allUsers}
              commentsList = {allComments}
            />
        </div>
  )
}

export default Homepage

import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../common/molecules/navbar'
import { MapPostToCardList } from '../mappers/cardMapper'
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

            {allPosts != null && allUsers != null && allComments != null && allUsers.length !== 0
              ? MapPostToCardList(allPosts, handleHomepageCardClicked, allUsers, allComments)
              : <div></div>
            }
        </div>
  )
}

export default Homepage

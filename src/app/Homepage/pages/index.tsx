import * as React from 'react'
import Navbar from '../../common/molecules/Navbar'
import PostCardList from '../../common/molecules/PostCardList'
import { useHomepageCommentViewModel } from '../viewModels/HomepageCommentViewModel'
import { useHomepagePostsViewModel } from '../viewModels/HomepagePostsViewModel'
import { useHomepageUsersViewModel } from '../viewModels/HomepageUsersViewModel'

const Homepage = (): JSX.Element => {
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
              usersList = {allUsers}
              commentsList = {allComments}
            />
        </div>
  )
}

export default Homepage

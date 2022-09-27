import * as React from 'react'
import Navbar from '../../common/molecules/navbar'
import PostCardList from '../../common/molecules/postCardList'
import { useHomepageCommentViewModel } from '../viewModels/homepageCommentViewModel'
import { useHomepagePostsViewModel } from '../viewModels/homepagePostsViewModel'
import { useHomepageUsersViewModel } from '../viewModels/homepageUsersViewModel'

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

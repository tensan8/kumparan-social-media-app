import * as React from 'react'
import Navbar from '../../../Common/Molecules/navbar'
import PostCardList from '../../../Common/Molecules/postCardList'
import { useHomepageCommentViewModel } from '../ViewModels/homepageCommentViewModel'
import { useHomepagePostsViewModel } from '../ViewModels/homepagePostsViewModel'
import { useHomepageUsersViewModel } from '../ViewModels/homepageUsersViewModel'

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

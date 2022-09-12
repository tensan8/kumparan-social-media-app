import { PostModel } from '../../../domain/models/Post'
import * as React from 'react'
import Card from '../../common/atoms/card'
import SummaryCardContent from '../../common/atoms/SummaryCardContent'
import { UserModel } from '../../../domain/models/User'
import { CommentModel } from '../../../domain/models/Comment'

export const MapPostToCardList = (
  postList: PostModel[],
  clickCallback: () => any,
  usersList: UserModel[],
  commentsList: CommentModel[]): any => {
  const userLookup = (postUserId: number): any => {
    for (let index = 0; index < usersList.length; index++) {
      if (usersList[index].id === postUserId) {
        return usersList[index]
      }
    }
  }

  const commentCounter = (postId: number): number => {
    let counter = 0

    for (let index = 0; index < commentsList.length; index++) {
      if (commentsList[index].postId === postId) {
        counter = counter + 1
      }
    }

    return counter
  }

  return (
    postList.map((post) => {
      const user = userLookup(post.userId) as UserModel
      return (
          <Card
            element={
                <SummaryCardContent
                    title={post.title}
                    content={post.body}
                    username={user.username}
                    company={user.company.get('name') ?? ''}
                    numberOfComment={commentCounter(post.id)}
                />
            }
            clickable={true}
            onCardClick={clickCallback}
            key={post.id}
          />
      )
    })
  )
}

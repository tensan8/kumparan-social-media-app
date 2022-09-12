import { PostModel } from '../../../domain/models/Post'
import * as React from 'react'
import Card from '../../common/atoms/card'
import SummaryCardContent from '../../common/atoms/SummaryCardContent'
import { UserModel } from '../../../domain/models/User'

export const MapPostToCardList = (postList: PostModel[], clickCallback: () => any, usersList: UserModel[]): any => {
  const userLookup = (postUserId: number): any => {
    for (let index = 0; index < usersList.length; index++) {
      if (usersList[index].id === postUserId) {
        return usersList[index]
      }
    }
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
                    numberOfComment={0}
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

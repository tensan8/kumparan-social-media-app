import { PostModel } from '../../../domain/models/Post'
import * as React from 'react'
import Card from '../../common/atoms/card'
import SummaryCardContent from '../../common/atoms/SummaryCardContent'

export const MapPostToCardList = (postList: PostModel[], clickCallback: () => any): any => {
  return (
    postList.map((post) => (
        <Card
            element={
                <SummaryCardContent
                    title={post.title}
                    content={post.body}
                    username='Username'
                    company='Company'
                    numberOfComment={0}
                />
            }
            clickable={true}
            onCardClick={clickCallback}
            key={post.id}
        />
    ))
  )
}

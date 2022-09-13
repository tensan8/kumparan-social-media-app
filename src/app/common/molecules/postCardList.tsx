import { PostModel } from '../../../domain/models/Post'
import * as React from 'react'
import Card from '../../common/atoms/card'
import SummaryCardContent from '../../common/atoms/SummaryCardContent'
import { UserModel } from '../../../domain/models/User'
import { CommentModel } from '../../../domain/models/Comment'

interface PostCardListProps {
  postList: PostModel[] | null
  clickCallback: () => any
  usersList: UserModel[] | null
  commentsList: CommentModel[] | null
}

const PostCardList = (props: PostCardListProps): JSX.Element => {
  const userLookup = React.useCallback((postUserId: number): any => {
    if (props.usersList != null) {
      for (let index = 0; index < props.usersList.length; index++) {
        if (props.usersList[index].id === postUserId) {
          return props.usersList[index]
        }
      }
    }
  }, [props.usersList])

  const commentCounter = React.useCallback((postId: number): number => {
    let counter = 0

    if (props.commentsList != null) {
      for (let index = 0; index < props.commentsList.length; index++) {
        if (props.commentsList[index].postId === postId) {
          counter = counter + 1
        }
      }
    }

    return counter
  }, [props.commentsList])

  return (
    props.postList != null && props.usersList != null && props.commentsList != null && props.usersList.length !== 0
      ? <div>
            {props.postList.map((post) => {
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
                    onCardClick={props.clickCallback}
                    key={post.id}
                />
              )
            })}
        </div>
      : <div></div>
  )
}

export default React.memo(PostCardList)

import { PostModel } from '../../Domain/Models/post'
import * as React from 'react'
import Card from '../Atoms/card'
import SummaryCardContent from '../Atoms/summaryCardContent'
import { UserModel } from '../../Domain/Models/user'
import { CommentModel } from '../../Domain/Models/comment'
import { useNavigate } from 'react-router-dom'

interface PostCardListProps {
  postList: PostModel[] | null
  usersList: UserModel[] | null
  commentsList: CommentModel[] | null
}

const PostCardList = (props: PostCardListProps): JSX.Element => {
  const navigate = useNavigate()

  const cardClickCallback = React.useCallback(
    (userId: number, postId: number) => () => {
      navigate(`/post-detail?userId=${userId}&postId=${postId}`)
    }, [])

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
                    onCardClick={cardClickCallback(user.id, post.id)}
                    key={post.id}
                />
              )
            })}
        </div>
      : <div></div>
  )
}

export default React.memo(PostCardList)

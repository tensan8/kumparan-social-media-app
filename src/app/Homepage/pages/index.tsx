import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../common/atoms/card'
import Navbar from '../../common/molecules/navbar'
import SummaryCardContent from '../../common/atoms/SummaryCardContent'
import { GetAllPosts } from '../../../data/repositories/PostRepositoryImpl/Post'
import { useEffect } from 'react'

const Homepage = (): JSX.Element => {
  const navigate = useNavigate()

  const handleHomepageCardClicked = React.useCallback(() => {
    navigate('/post-detail')
  }, [navigate])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, getAllPost } = GetAllPosts()

  useEffect(() => {
    const _getAllPost = async (): Promise<any> => {
      await getAllPost()
    }
    _getAllPost().catch((e) => console.log(e))
  }, [])

  return (
    <div>
      <Navbar backArrowAvailable={false} />

      {result.data !== null
        ? (
            result.data.map((post) => (
          <Card
            key={post.id}
            element={
              <SummaryCardContent
                title={post.title}
                content={post.body}
                username={'user'}
                company="Company"
                numberOfComment={0}
              />
            }
            clickable={true}
            onCardClick={handleHomepageCardClicked}
          />
            ))
          )
        : (
        <div />
          )}
    </div>
  )
}

export default Homepage

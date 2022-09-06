import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../../Common/atoms/card'
import Navbar from '../../../Common/molecules/navbar'
import SummaryCardContent from '../../../Common/atoms/SummaryCardContent'
import { useHomePageViewModel } from '../viewModels/HomePageViewModel'

const Homepage = (): JSX.Element => {
  const navigate = useNavigate()

  const { posts } = useHomePageViewModel()

  console.log('>>', { posts })

  const handleHomepageCardClicked = React.useCallback(() => {
    navigate('/post-detail')
  }, [navigate])

  return (
        <div>
            <Navbar
                backArrowAvailable = {false}
            />

            <Card
                element={
                    <SummaryCardContent
                        title='Title'
                        content='Content'
                        username='Username'
                        company='Company'
                        numberOfComment={0}
                    />
                }
                clickable={true}
                onCardClick={handleHomepageCardClicked}
            />
        </div>
  )
}

export default Homepage

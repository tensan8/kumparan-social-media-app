import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../common/atoms/card'
import Navbar from '../../common/molecules/navbar'
import SummaryCardContent from '../../common/atoms/SummaryCardContent'

const Homepage = (): JSX.Element => {
  const navigate = useNavigate()

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

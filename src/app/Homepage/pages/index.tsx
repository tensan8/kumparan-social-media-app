import * as React from 'react'
import Card from '../../../Common/atoms/card'
import Navbar from '../../../Common/molecules/navbar'
import SummaryCardContent from '../../../Common/atoms/summaryCardContent'

const Homepage = (): JSX.Element => {
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
                cardSize='default'
                clickable={true}
            />
        </div>
  )
}

export default Homepage

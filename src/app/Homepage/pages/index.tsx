import * as React from 'react'
import { DEFAULT_VALUE } from '../../../Common/utils/DefaultValues'
import Card from '../../../Common/atoms/Card'
import Navbar from '../../../Common/molecules/Navbar'
import SummaryCardContent from '../../../Common/atoms/SummaryCardContent'

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
                cardSize={DEFAULT_VALUE.DEFAULT_CARD_SIZE}
                clickable={true}
            />
        </div>
  )
}

export default Homepage

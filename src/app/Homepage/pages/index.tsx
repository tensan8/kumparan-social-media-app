import * as React from 'react'
import { DEFAULT_VALUE } from '../../../Common/utils/defaultValues'
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
                cardSize={DEFAULT_VALUE.DEFAULT_CARD_SIZE}
                clickable={true}
            />
        </div>
  )
}

export default Homepage

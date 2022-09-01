import * as React from 'react'
import Card from '../../../Common/atoms/card'
import Navbar from '../../../Common/molecules/navbar'

const Homepage = (): JSX.Element => {
  return (
        <div>
            <Navbar
                backArrowAvailable = {false}
            />

            <Card
                element={<h1>Test</h1>}
                cardSize="w-3/4 h-72"
                clickable={true}
            />
        </div>
  )
}

export default Homepage

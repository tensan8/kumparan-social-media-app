import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../common/molecules/navbar'
import { MapPostToCardList } from '../mappers/cardMapper'
import { useHomepageViewModel } from '../viewModels/homepageViewModel'

const Homepage = (): JSX.Element => {
  const navigate = useNavigate()

  const handleHomepageCardClicked = React.useCallback(() => {
    navigate('/post-detail')
  }, [navigate])

  const { allPosts } = useHomepageViewModel()

  return (
        <div>
            <Navbar
                backArrowAvailable = {false}
            />

            {allPosts != null
              ? MapPostToCardList(allPosts, handleHomepageCardClicked)
              : <div></div>
            }
        </div>
  )
}

export default Homepage

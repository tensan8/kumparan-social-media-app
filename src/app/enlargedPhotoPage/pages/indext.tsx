import * as React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../common/molecules/navbar'
import NotFoundPlaceholder from '../../common/molecules/notFoundPlaceholder'
import ProfileHead from '../../common/molecules/profileHead'

const EnlargedPhotoPage = (): JSX.Element => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const params = new URLSearchParams(useLocation().search)

  return (
    params.get('username') != null
      ? <div>
            <Navbar
                backArrowAvailable = { true }
            />
            <ProfileHead
                username = {params.get('username') ?? ''}
            />
            <p>Enlarged Photo Page</p>
        </div>
      : <NotFoundPlaceholder />
  )
}

export default EnlargedPhotoPage

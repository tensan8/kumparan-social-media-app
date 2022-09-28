import * as React from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../../common/atoms/card'
import EnlargedPhotoContent from '../../common/atoms/enlargedPhotoContent'
import Navbar from '../../common/molecules/navbar'
import NotFoundPlaceholder from '../../common/molecules/notFoundPlaceholder'
import ProfileHead from '../../common/molecules/profileHead'
import { useEnlargedPhotoViewModel } from '../viewModels/enlargedPhotoViewModel'

const EnlargedPhotoPage = (): JSX.Element => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const params = new URLSearchParams(useLocation().search)

  const { photo } = useEnlargedPhotoViewModel(Number(params.get('photoId')))

  return (
    params.get('username') != null && params.get('albumName') != null && params.get('photoId') != null
      ? <div className='block pb-10'>
            <Navbar
                backArrowAvailable = { true }
            />
            <ProfileHead
                username = {params.get('username') ?? ''}
            />
            <Card
                element={
                    photo != null
                      ? <EnlargedPhotoContent
                            albumTitle = {params.get('albumName') ?? ''}
                            chosenPhoto = {photo}
                        />
                      : <div></div>
                }
                clickable={false}
                cardSize = 'full'
                extraStyling='mt-0'
            />
        </div>
      : <NotFoundPlaceholder />
  )
}

export default EnlargedPhotoPage

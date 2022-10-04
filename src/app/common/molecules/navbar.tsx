import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAssets } from '../utils/AssetsContext'

const backArrowStyling = 'absolute w-6 h-6 left-10 top-6' as const

interface NavbarProps {
  backArrowAvailable: boolean
}

const Navbar = (props: NavbarProps): JSX.Element => {
  const navigate = useNavigate()
  const asset = useAssets()

  const handleBackArrowClicked = React.useCallback(() => {
    navigate(-1)
  }, [navigate])

  const handleLogoClicked = React.useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
        <div className='flex min-w-max bg-white rounded-b-3xl drop-shadow sticky top-0 z-50'>
            {props.backArrowAvailable
              ? <img
                  src={asset.getAsset('back.png')}
                  alt="Back Arrow"
                  className={`${backArrowStyling} cursor-pointer`}
                  onClick={handleBackArrowClicked}
                />
              : <div className={`${backArrowStyling}`}>
                </div>
            }

            <div className='mx-auto flex cursor-pointer' onClick={handleLogoClicked}>
                <img
                    src={asset.getAsset('logo.png')}
                    alt="logo of kumparan"
                    className="w-36"
                />
                <h1 className='text-red text-3xl my-auto font-bold pl-1'>
                    Share
                </h1>
            </div>
        </div>
  )
}

export default React.memo(Navbar)

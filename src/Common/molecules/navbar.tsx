import * as React from 'react'
import logo from '../../assets/logo.png'
import backArrow from '../../assets/back.png'
import { useNavigate } from 'react-router-dom'

interface NavbarProps {
  backArrowAvailable: boolean
}

const Navbar = (props: NavbarProps): JSX.Element => {
  const navigate = useNavigate()

  const handleBackArrowClicked = React.useCallback(() => {
    navigate(-1)
  }, [navigate])

  const handleLogoClicked = React.useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
        <div className='flex min-w-max bg-white rounded-b-3xl drop-shadow sticky top-0 z-50'>
            <img
                src={backArrow}
                alt="Back Arrow"
                className={`absolute w-6 h-6 left-10 top-6 cursor-pointer ${props.backArrowAvailable ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleBackArrowClicked}
            />

            <div className='mx-auto flex cursor-pointer' onClick={handleLogoClicked}>
                <img
                    src={logo}
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

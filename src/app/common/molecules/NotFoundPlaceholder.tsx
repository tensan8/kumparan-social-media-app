import * as React from 'react'
import Navbar from './Navbar'
import ghost from '../../../assets/ghost.gif'

const NotFoundPlaceholder = (): JSX.Element => {
  return (
    <div className='w-screen'>
        <Navbar backArrowAvailable = {false} />
        <div className='flex flex-col w-full mt-36'>
          <div className='mx-auto my-auto'>
            <h1 className='font-bold text-3xl mx-auto w-full'>Page Not Found</h1>
            <img
              src={ghost}
              alt="Ghost GIF"
            />
          </div>
        </div>
    </div>
  )
}

export default React.memo(NotFoundPlaceholder)

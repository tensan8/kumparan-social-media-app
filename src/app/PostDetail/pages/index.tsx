import * as React from 'react'
import Navbar from '../../common/molecules/navbar'

const PostDetail = (): JSX.Element => {
  return (
    <div className='block pb-10'>
        <Navbar
            backArrowAvailable={true}
        />
        <h1>Masuk</h1>
    </div>
  )
}

export default PostDetail

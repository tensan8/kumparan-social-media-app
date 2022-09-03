import * as React from 'react'
import { useRoutes } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import getRoutes from './routes'

const App = (): JSX.Element => {
  const routes = useRoutes(getRoutes())

  return (
        <>{routes}</>
  )
}

export default hot(App)

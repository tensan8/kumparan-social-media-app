import * as React from 'react'
import { useRoutes } from 'react-router-dom'
import getRoutes from './routes'
import './index.css'

const App = (): JSX.Element => {
  const routes = useRoutes(getRoutes())

  return (
    <React.Suspense fallback = {'loading'}>
      {routes}
    </React.Suspense>
  )
}

export default App

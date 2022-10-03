import App from '../app'
import * as React from 'react'
import { StaticRouter } from 'react-router-dom/server'
import './index.css'

const client = (location: string): JSX.Element => {
  return (
    <React.StrictMode>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  )
}

export default client

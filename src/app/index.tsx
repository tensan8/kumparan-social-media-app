import * as React from 'react'
import App from './app'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AssetsProvider } from './common/utils/assetsContext'

const assetsMap = typeof window !== 'undefined' ? window.__ASSETS_MAP__ ?? {} : {}

if (typeof window !== 'undefined') delete window.__ASSETS_MAP__

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <AssetsProvider assetsMap={assetsMap}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AssetsProvider>
  </React.StrictMode>
)

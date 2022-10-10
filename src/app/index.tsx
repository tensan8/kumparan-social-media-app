import * as React from 'react'
import App from './app'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AssetsProvider } from './common/utils/assetsContext'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'

const assetsMap = typeof window !== 'undefined' ? window.__ASSETS_MAP__ ?? {} : {}

const dehydratedState = window.__REACT_QUERY_STATE__

if (typeof window !== 'undefined') delete window.__ASSETS_MAP__

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <AssetsProvider assetsMap={assetsMap}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AssetsProvider>
      </Hydrate>
    </QueryClientProvider>
  </React.StrictMode>
)

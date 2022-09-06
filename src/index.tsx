import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.jsx'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <BrowserRouter>
    <Provider store={store}>
        <App/>
        </Provider>
    </BrowserRouter>
)

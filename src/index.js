import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// css
import './styles/Home.css'
import './styles/CategoryPg.css'
import './styles/Products.css'
import './styles/Single.css'
import './styles/Cart.css'
import './styles/SearchSystem.css'
import './styles/LookProd.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

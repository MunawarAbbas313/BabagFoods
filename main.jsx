import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Usercontext from './context/Usercontext.jsx'

import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <Usercontext>
    <App />
  </Usercontext>
  </Provider>

)

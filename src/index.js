import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore } from 'redux'
import rootReducer from './redux/rootReducer'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

export default store

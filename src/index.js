import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './styles/main.css'
import App from './App'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, applyMiddleware(thunk, logger))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

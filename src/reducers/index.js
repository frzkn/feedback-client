//change this
import postReducer from './postReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  authReducer,
  postReducer,
})

export default rootReducer

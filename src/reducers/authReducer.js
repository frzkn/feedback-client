import { LOGIN_SUCCESS, LOGIN_TRUE, LOGOUT } from '../actions'

// import { products } from '../initialState'
import { produce } from 'immer'

const authReducer = (state = { user: {}, isLoggedIn: false }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return produce(state, (draft) => {
        draft.user = action.payload
        draft.isLoggedIn = true
      })
    // return { ...state, user: action.payload, isLoggedIn: true }
    case LOGIN_TRUE:
      return produce(state, (draft) => {
        draft.isLoggedIn = true
      })
    // return { ...state, isLoggedIn: true }
    case LOGOUT:
      return produce(state, (draft) => {
        draft.user = {}
        draft.isLoggedIn = false
      })
    // return { ...state, user: {}, isLoggedIn: false }
    default:
      return state
  }
}
export default authReducer

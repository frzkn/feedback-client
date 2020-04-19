import { LOGIN_SUCCESS } from '../actions'

// import { products } from '../initialState'

const authReducer = (state = { user: {}, isLoggedIn: false }, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, isLoggedIn: true }
    case 'LOGIN_TRUE':
      return { ...state, isLoggedIn: true }
    case 'LOGOUT':
      return { ...state, user: {}, isLoggedIn: false }
    default:
      return state
  }
}
export default authReducer

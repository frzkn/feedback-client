import {
  FETCH_SUCCESS,
  FETCH_FAILED,
  UPDATE_SELECTED,
  FETCH_ONE_FAILED,
  FETCH_ONE_SUCCESS,
  COMMENT_SUCCESS,
  SUB_COMMENT_SUCCESS,
  LOGOUT,
  CLEAR_SELECTED,
} from '../actions'

const postReducer = (state = { data: [], loading: false, selected: {}, fetchSuccess: false }, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      let newState1 = { ...state, loading: false, fetchSuccess: true, data: [...action.payload] }
      return newState1
    case FETCH_FAILED:
      return state
    case FETCH_ONE_FAILED:
      return state
    case FETCH_ONE_SUCCESS:
      let newState3 = { ...state, selected: action.payload }
      return newState3
    case COMMENT_SUCCESS:
      let comment = action.payload
      console.log('comment is', comment)
      let newState4 = { ...state, selected: { ...state.selected, comments: state.selected.comments.concat(comment) } }
      return newState4
    case SUB_COMMENT_SUCCESS:
      let subcomment = action.payload
      console.log('PAYLOAD')
      console.log(action.payload)
      let commentId = subcomment.comment
      let newComments = state.selected.comments.map((el) =>
        el._id === commentId ? { ...el, subcomments: el.subcomments.concat(subcomment) } : el
      )
      return { ...state, selected: { ...state.selected, comments: newComments } }
    case LOGOUT:
      return { data: [], loading: false, selected: {} }
    case CLEAR_SELECTED:
      return { data: [], loading: false, selected: {} }
    default:
      return state
  }
}

export default postReducer

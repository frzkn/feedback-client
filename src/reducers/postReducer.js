import * as types from '../actions'
import { produce } from 'immer'

const postReducer = (state = { data: [], loading: false, selected: {}, fetchSuccess: false }, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      // let newState1 = { ...state, loading: false, fetchSuccess: true, data: [...action.payload] }
      // return newState1
      // Immer way to do this
      return produce(state, (draft) => {
        draft.loading = false
        draft.fetchSuccess = true
        draft.data = [...action.payload]
      })

    case types.FETCH_FAILED:
      return state
    case types.FETCH_ONE_FAILED:
      return state
    case types.FETCH_ONE_SUCCESS:
      // return { ...state, selected: action.payload }
      return produce(state, (draft) => {
        draft.selected = action.payload
      })
    case types.COMMENT_SUCCESS:
      let comment = action.payload
      // return { ...state, selected: { ...state.selected, comments: state.selected.comments.concat(comment) } }

      return produce(state, (draft) => {
        draft.selected.comments.push(comment)
      })

    case types.SUB_COMMENT_SUCCESS:
      let subcomment = action.payload
      let commentId = subcomment.comment

      // let newComments = state.selected.comments.map((el) =>
      //   el._id === commentId ? { ...el, subcomments: el.subcomments.concat(subcomment) } : el
      // )
      // return { ...state, selected: { ...state.selected, comments: newComments } }

      // Not bad very kewl
      // It's funny to compulsarily mutate the state or it wouldn't work xd
      return produce(state, (draft) => {
        draft.selected.comments.forEach((el) => {
          el = el._id === commentId ? el.subcomments.push(subcomment) : el
        })

        // draft.selected.comments = draft.selected.comments.map((el) =>
        //   el._id === commentId ? el.subcomments.concat(subcomment) : el
        // )
      })

    case types.LOGOUT:
      // return { data: [], loading: false, selected: {} }
      // Immer way to do this
      return produce(state, (draft) => {
        draft.data = []
        draft.selected = false
        draft.selected = {}
      })
    case types.CLEAR_SELECTED:
      // return { data: [], loading: false, selected: {} }
      // Immer way to to this
      return produce(state, (draft) => {
        draft.data = []
        draft.selected = false
        draft.selected = {}
      })
    default:
      return state
  }
}

export default postReducer

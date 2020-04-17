import axios from 'axios'
import { services } from '../services/auth'

// Auth reducer actions
export const AUTH_FAILED = 'AUTH_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const AUTH_LOADING = 'AUTH_LOADING'
export const LOGOUT = 'LOGOUT'

const BASE_URL = 'https://the-feedback.herokuapp.com'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: token,
    },
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

export const loginUser = (user) => {
  return (dispatch) => {
    axios
      .post(BASE_URL + '/api/login', user)
      .then((response) => response.data)
      .then((data) => {
        if (data.success) {
          services.setToken(data.token, user.username)
          dispatch({ type: 'LOGIN_SUCCESS', payload: user })
        }
      })
      .catch((err) => {
        alert('Error in login')
        console.log('Login Error', err)
      })
  }
}
export const registerUser = (user) => {
  return (dispatch) => {
    axios
      .post(BASE_URL + '/api/register', user)
      .then((response) => {
        dispatch({ type: 'REGISTER_SUCCESS' })
        alert('You have registered please login')
      })
      .catch((err) => {
        dispatch({ type: 'REGISTER_FAILURE' })
        alert('Error in registration')
      })
  }
}

// Post reducer actions
export const FETCH_INIT = 'FETCH_INIT'

export const FETCH_ONE_SUCCESS = 'FETCH_ONE_SUCCESS'
export const FETCH_ONE_FAILED = 'FETCH_ONE_FAILED'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILED = 'FETCH_FAILED'
export const UPDATE_SELECTED = 'UPDATE_SELECTED'

export const SUB_COMMENT_SUCCESS = 'SUB_COMMENT_SUCCESS'
export const COMMENT_SUCCESS = 'COMMENT_SUCCESS'
export const POST_SUCCESS = 'POST_SUCCESS'

export const updateSelected = (data) => {
  return {
    type: UPDATE_SELECTED,
    payload: data,
  }
}

export const fetchPosts = () => {
  return (dispatch) => {
    axios
      .get(BASE_URL + '/api/post', getConfig(services.getToken()))
      .then((response) =>
        dispatch({
          type: FETCH_SUCCESS,
          payload: response.data,
        })
      )
      .catch((response) =>
        dispatch({
          type: FETCH_FAILED,
          error: response.error,
        })
      )
  }
}

export const fetchPost = (id) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/api/post/${id}`, getConfig(services.getToken()))
      .then((response) => {
        dispatch({
          type: FETCH_ONE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((response) =>
        dispatch({
          type: FETCH_ONE_FAILED,
          error: response.error,
        })
      )
  }
}

export const postComment = (comment) => {
  return (dispatch) => {
    axios.post(BASE_URL + '/api/comment', comment, getConfig(services.getToken())).then((res) =>
      dispatch({
        type: COMMENT_SUCCESS,
        payload: res.data.comment,
      })
    )
  }
}

export const postSubComment = (subComment) => {
  return (dispatch) => {
    axios.post(BASE_URL + '/api/subcomment', subComment, getConfig(services.getToken())).then((res) => {
      dispatch({
        type: SUB_COMMENT_SUCCESS,
        payload: res.data.subComment,
      })
    })
  }
}

export const postPost = (post) => {
  return (dispatch) => {
    axios.post(BASE_URL + '/api/post', post, getConfig(services.getToken())).then((res) => {
      dispatch({
        type: POST_SUCCESS,
      })
    })
  }
}

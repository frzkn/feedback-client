import React, { useEffect } from 'react'
import Comments from './Comments'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPost, clearSelected, LOGOUT } from '../actions'
import { useHistory } from 'react-router-dom'
import { services } from '../services/auth'
const Loader = ({ classes }) => {
  return (
    <div className="flex flex-col">
      <span className={`dot h-3 block w-48 bg-white  m-1 ${classes}`}></span>
      <span className={`dot h-2 block w-32 bg-white  m-1 ${classes}`}></span>
    </div>
  )
}
const PostDetails = ({ match }) => {
  const { selected } = useSelector((state) => state.postReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (!services.loggedIn()) {
      history.push('/')
    }
  }, [])

  useEffect(() => {
    dispatch(fetchPost(match.params.id))
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    return () => {
      dispatch(clearSelected())
    }
  }, [])

  return (
    <div className="container p-4 md:max-w-xl	 mx-auto flex flex-col ">
      <div className="card bg-white border rounded p-4 mb-2 bg-teal-500">
        <h1 className="text-white text-2xl font-bold mb-4 ">{selected.title || <Loader classes={'blink-title'} />}</h1>
        <p className="mb-2 text-white block">{selected.username || <Loader classes={'blink-small'} />}</p>
        <p className="p-2 bg-teal-600 rounded rounded-lg text-white ">{selected.content || '       '}</p>
      </div>
      {<Comments comments={selected.comments} id={selected._id} />}
    </div>
  )
}
export default PostDetails

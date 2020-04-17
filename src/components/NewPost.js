import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { services } from '../services/auth'
import { postPost } from '../actions'
import { useDispatch } from 'react-redux'

const NewPost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (!services.loggedIn()) {
      history.push('/')
    }
  }, [])

  const createPost = async (e) => {
    e.preventDefault()
    if (title && content) {
      dispatch(postPost({ title, content }))
      setTitle('')
      setContent('')
      alert('Thank you for your feedback')
      history.push('/')
    }
  }
  return (
    <div className="container p-4 md:max-w-xl mx-auto flex flex-col">
      <h1 className="text-center text-2xl">Create a new post</h1>
      <form onSubmit={createPost}>
        <label className="block mb-4">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            className="form-input mt-1 block w-full"
            placeholder="Give a title to your feedback"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Feedback</span>
          <textarea
            className="form-textarea mt-1 block w-full"
            rows="3"
            placeholder="Please describe your experience"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit" className="bg-teal-400 inline-block w-24 text-white  py-2 rounded shadow ">
          Submit
        </button>
      </form>
    </div>
  )
}

export default NewPost

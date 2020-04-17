import React, { useState } from 'react'
import { postSubComment } from '../actions/'
import { useDispatch } from 'react-redux'
import { services } from '../services/auth'
const Comment = ({ comment, classes, reply }) => {
  const [replySwitch, setReplySwitch] = useState(false)
  const [content, setContent] = useState('')
  console.log(comment)

  const dispatch = useDispatch()
  if (reply) {
    console.log('comment is ', comment)
  }

  const handleSubCommentSubmit = (e) => {
    e.preventDefault()
    console.log('ran')
    if (content.trim()) {
      dispatch(
        postSubComment({
          comment: comment._id,
          content: content,
        })
      )
      setContent('')
    } else alert('Please enter a reply')
  }

  return (
    <li className={`border-b p-4 ${classes} ${!reply ? 'bg-gray-200' : 'bg-gray-100'}`}>
      <p className="font-semibold">{comment.username}</p>

      <div className="">
        <p className="col-span-8 md:col-span-9">{comment.content}</p>
        {reply && [
          !replySwitch && (
            <button
              className="ml-auto flex px-2 py-2 mt-1 bg-teal-400 rounded text-white text-xs items-center flex-end"
              onClick={() => setReplySwitch(true)}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
              </svg>
              <span className=" ml-2">REPLY</span>
            </button>
          ),

          replySwitch && (
            <div className="flex items-center ">
              <form onSubmit={handleSubCommentSubmit} className=" flex flex-grow">
                <input
                  type="text"
                  className="form-input mt-1 block w-full rounded-full"
                  placeholder="Type a reply"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </form>
              <button
                className="text-teal-500 outline-none ml-2"
                onClick={(e) => {
                  e.preventDefault()
                  setContent('')
                  setReplySwitch(false)
                }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 mx-auto my-auto"
                >
                  <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
            </div>
          ),
        ]}
      </div>
    </li>
  )
}
export default Comment

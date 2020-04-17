import React, { useState } from 'react'
import Comment from './Comment'
import { postComment } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { services } from '../services/auth'

const Comments = ({ comments, id }) => {
  console.log(id)
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const state = useSelector((state) => state.authReducer)

  const submitComment = (e) => {
    console.log('dispatched')
    e.preventDefault()
    if (text) {
      dispatch(
        postComment({
          post: id,
          content: text,
        })
      )
      setText('')
    }
  }
  return (
    <div className={`p-4 shadow rounded border `}>
      <p> Comments </p>

      <form className="mb-4" onSubmit={submitComment}>
        <input
          type="text"
          className="form-input mt-1 block w-full"
          placeholder="Type a comment"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <ul>
        {comments &&
          comments.map((comment) => {
            return (
              <div>
                <Comment comment={comment} classes="border mt-2" reply={true} />
                {comment.subcomments.map((subcom) => (
                  <Comment comment={subcom} classes="ml-4 border-l" reply={false} />
                ))}
              </div>
            )
          })}
      </ul>
    </div>
  )
}
export default Comments

// {
//   /* <li>
//           <Comment classes="border mt-2" reply={true} />
//           <Comment classes="ml-4 border-l" reply={false} />
//           <Comment classes="ml-4 border-l" reply={false} />
//         </li>
//         <li>
//           <Comment classes="border mt-2" reply={true} />
//           <Comment classes="ml-4 border-l" reply={false} />
//           <Comment classes="ml-4 border-l" reply={false} />
//         </li> */
// }

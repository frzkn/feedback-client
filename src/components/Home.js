import React, { useEffect, useLayoutEffect } from 'react'
import { fetchPosts, updateSelected } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { services } from '../services/auth'

const Loader = () => {
  return (
    <div className="md:col-span-2 flex justify-center items-center ">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
const Home = () => {
  const posts = useSelector((state) => state.postReducer)
  const history = useHistory()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  useLayoutEffect(() => {
    if (!services.loggedIn()) {
      history.push('/login')
    }
  }, [])

  return (
    <div className="container p-4 md:max-w-xl mx-auto flex flex-col">
      <h1 className="text-2xl mb-4 text-center">All Feedbacks</h1>
      <div className="grid md:grid md:grid-cols-2 gap-4 ">
        {posts.data.length > 0 && posts.data ? (
          posts.data
            .slice()
            .reverse()
            .map((post) => (
              <div className="flex pt-4 shadow border flex-col bg-teal-500" key={post._id}>
                <h2 className="text-xl px-4  text-white font-bold">
                  {post.title.length > 20 ? post.title.slice(0, 20) + '...' : post.title}
                </h2>
                <p className="px-4 text-white">@{post.username}</p>
                <p className="p-2 flex-grow bg-teal-600 m-4 rounded text-white">
                  {post.content.length > 45 ? post.content.slice(0, 45) + '...' : post.content}
                </p>
                <Link to={`/post/${post._id}`}>
                  <div className=" bg-white text-center border-t mt-2 pt-3 pb-3 cursor-pointer hover:bg-gray-200 flex justify-center items-center">
                    {' '}
                    <span>Comments</span>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      class="w-4 h-4 ml-4"
                    >
                      <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            ))
        ) : (
          <Loader />
          // <h1 className=" block md:col-span-2 text-center p-16 text-1xl">No feedbacks to show</h1>
        )}
      </div>
    </div>
  )
}

export default Home

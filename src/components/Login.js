import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { loginUser, logout } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { services } from '../services/auth'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const state = useSelector((state) => state.authReducer)
  const history = useHistory()
  const login = (e) => {
    e.preventDefault()
    if (username.trim() && password.trim()) {
      dispatch(loginUser({ username, password }))
      // setTimeout(() => {
      //   history.push('/')
      // }, 1000)
    } else alert('Validation Error')
  }

  const user = services.getUser()
  useEffect(() => {
    if (state.isLoggedIn) {
      history.push('/')
    }
  }, [user])

  useEffect(() => {
    if (user && services.loggedIn()) {
      if (window.confirm('Do you want to end this session?')) {
        services.logout()
        dispatch(logout())
      } else {
        history.push('/')
      }
    }
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 text-center">Please login to continue</h1>
      <form onSubmit={login}>
        <div className="container p-4 md:max-w-xl	 mx-auto flex flex-col">
          <label className="block mb-4">
            <span className="text-gray-700">Username</span>
            <input
              type="text"
              className="form-input mt-1 block w-full"
              placeholder="frzkn"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              className="form-input mt-1 block w-full"
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="bg-teal-400 inline-block w-24 text-white  py-2 rounded shadow ">Submit</button>
        </div>
      </form>
      <p className="text-center ">
        Need an account?
        <Link to="/register">
          <span className="text-blue-600 font-bold cursor-pointer"> Sign up here</span>
        </Link>
      </p>
    </div>
  )
}

export default Login

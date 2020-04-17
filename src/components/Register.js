import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { registerUser } from '../actions'
import { useDispatch } from 'react-redux'
import { services } from '../services/auth'

const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (services.loggedIn()) {
      history.push('/')
    }
  }, [])

  const register = (e) => {
    e.preventDefault()
    if (email.trim() && username.trim() && password.trim()) {
      dispatch(registerUser({ username, email, password }))
    } else alert('Validation Error')
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 text-center">Register a new account</h1>
      <form onSubmit={register}>
        <div className="container p-4 md:max-w-xl	 mx-auto flex flex-col">
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="form-input mt-1 block w-full"
              placeholder="faraz@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Username</span>
            <input
              type="text"
              className="form-input mt-1 block w-full"
              placeholder="faraz"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              className="form-input mt-1 block w-full"
              placeholder="*********"
              value={password}
              minlength="8"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="bg-teal-400 inline-block w-24 text-white  py-2 rounded shadow ">Submit</button>
        </div>
      </form>
      <p className="text-center ">
        Have an account?
        <Link to="/login">
          <span className="text-blue-600 font-bold cursor-pointer"> Login here</span>
        </Link>
      </p>
    </div>
  )
}

export default Register

import React from 'react'
const Form = () => {
  return (
    <div className="container p-4 md:max-w-xl	 mx-auto flex flex-col">
      <label className="block mb-4">
        <span className="text-gray-700">Email</span>
        <input type="email" className="form-input mt-1 block w-full" placeholder="faraz@example.com" />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Password</span>
        <input type="password" className="form-input mt-1 block w-full" placeholder="*********" />
      </label>
      <button className="bg-teal-400 inline-block w-24 text-white  py-2 rounded shadow ">Submit</button>
    </div>
  )
}

export default Form

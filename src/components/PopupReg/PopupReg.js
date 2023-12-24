import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'


function PopupReg() {

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  return (
    <div className="flex flex-col p-5 py-20 max-w-7xl mx-auto rounded-sm">
      <form
        className="flex flex-col space-y-14 max-w-xl mx-auto w-full"
      
      >
        <div className="space-y-4">
          <div className="w-full space-y-1">
            <label htmlFor="email">Email</label>
            <input
           
              type="email"
              name="email"
              placeholder="johndoe@mail.com"
              className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500"
            />
          </div>
          <div className="w-full space-y-1">
            <label htmlFor="password">Password</label>
            <input
          
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-3 bg-secondary font-medium rounded-md text-white hover:bg-primary transition-all"
        >
          Request Access
        </button>
      </form>
    </div>
  )
}

export default PopupReg

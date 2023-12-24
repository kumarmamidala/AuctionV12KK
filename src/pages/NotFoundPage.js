import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Footerr from '../components/Footerr/Footerr'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div>
      <TopBar />
      <div className="flex flex-col max-w-7xl mx-auto scroll-smooth p-20 mb-20 justify-center items-center">
        <div className="text-[5rem]">404</div>
        <div>Page not found</div>
        <button
          type="button"
          className="px-4 py-2 mt-5 text-xl font-semibold hover:text-gray-700 transition-all"
          onClick={() => navigate('/')}
        >
          Go to Homepage
        </button>
      </div>
      <Footerr />
    </div>
  )
}

export default NotFoundPage

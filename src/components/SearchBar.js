import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SearchBar({ items, loading }) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const [show, setShow] = useState(true) //TODO: For now blur wont work i guess.

  const handleFilter = (e) => {
    const searchWord = e.target.value
    setWordEntered(searchWord)
    const newFilter = items.filter((value) => {
      return value.brand.toLowerCase().startsWith(searchWord.toLowerCase())
    })

    const filteredBrands = newFilter?.map((item, idx) => {
      return item.brand
    })

    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData([...new Set(filteredBrands)])
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  const even = (number) => {
    if (number % 2 === 0) return true
    return false
  }

  return (
    <div>
      <div className="relative flex items-center bg-bgColor border border-slate-300 rounded-md focus:border-sky-500 font-medium">
        <input
          type="text"
          placeholder="Search anything from here"
          className="w-full p-2 outline-none rounded-md bg-transparent "
          value={wordEntered}
          onChange={handleFilter}
          // onFocus={() => setShow(true)}
          // onBlur={() => setShow(false)}
        />
        <div className="p-2">
          {wordEntered === '' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={clearInput}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        {show && filteredData.length !== 0 && (
          <div className="absolute w-full top-10 mt-2 p-2 flex flex-col z-20 bg-white border border-slate-300 shadow-md rounded-md">
            {filteredData.slice(0, 8).map((item, idx) => (
              <Link
                to={`/search?q=${item}`}
                className={`${
                  even(idx) ? 'bg-white' : 'bg-gray-100'
                }  text-black group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-2 hover:bg-[#2872b020] bg-opacity-50 transition-all`}
                key={item?.id}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <p className="text-sm pl-1">{item}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar

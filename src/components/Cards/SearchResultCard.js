import React, { useState } from 'react'

function SearchResultCard({ data, grid }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      className={`w-full rounded-md space-y-2 ${grid ? 'mb-4' : 'mb-2'}`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="bg-black rounded-sm">
        <a className="relative rounded-sm" href={`/Marketplace/${data?.Id}`}>
          {/* <img
            src={data?.pic}
            alt="car-pic"
            className={`rounded-sm w-full h-full aspect-video object-cover ${
              hover ? 'opacity-75' : 'opacity-100'
            } transition-all`}
          /> */}
          {data?.sold ? (
            <div className="absolute bottom-1 -left-2 p-1 px-2 text-sm bg-black text-white font-bold rounded-md bg-opacity-75 scale-75 sm:bottom-2 sm:left-2 sm:scale-100">
              Sold for {data?.Price}
            </div>
          ) : (
            <div className="absolute bottom-1 -left-2 p-1 px-2 text-sm font-bold bg-slate-50 rounded-md bg-opacity-75 scale-75 sm:bottom-2 sm:left-2 sm:scale-100">
              Bid to {data?.Price}
            </div>
          )}
        </a>
      </div>
      <div>
        <a className="font-bold sm:text-lg" href={`/Marketplace/${data?.Id}`}>
          {data?.Name}
        </a>
        <div className="text-sm">
          ~35,100 Miles, 450-hp W12, 1 Owner Until 2021, AWD
        </div>
        {data?.sold ? (
          <div className="text-sm text-gray-600">Ended 4/22/22</div>
        ) : null}
      </div>
    </div>
  )
}

export default SearchResultCard

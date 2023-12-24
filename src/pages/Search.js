import React, { useContext, useState } from 'react'
import SearchResultCard from '../components/Cards/SearchResultCard'
import TopBar from '../components/TopBar'
import { ProductContext } from '../Context/products_context'
import Footerr from '../components/Footerr/Footerr'

function Search() {
  const products = useContext(ProductContext)

  return (
    <>
      <TopBar />
      {products &&
        products?.map((item, idx) => (
          <SearchResultCard key={item?.Id} data={item} />
        ))}
      <Footerr />
    </>
  )
}

export default Search

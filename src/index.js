import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { FilterProvider } from './Context/filter_context'
import AuthContextProvider from './Context/AuthContextProvider'
import { ChakraProvider } from '@chakra-ui/react'
import 'swiper/css/bundle'
import { ProductProvider } from './Context/products_context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ProductProvider>
    </AuthContextProvider>
  </React.StrictMode>
)

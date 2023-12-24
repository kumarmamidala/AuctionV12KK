import React, { useState } from 'react'
import MenuButtons from './MenuButtons'
import DynamicPage from './DynamicPage'
import mains from './mains'
import drinks from './drinks'
import desserts from './desserts'
import './menu-styles/menu.css'
import { MenuTexts } from './MenuTexts'
// import "../welcome/welcome.css";
import '../Welcome/Welcome.css'

export const Menu = () => {
  // state to manage the type of food  currently active
  const [foodCategory, setFoodCategory] = useState(1)

  const titleArr = ['Pricing', 'Technology', 'Security']

  //setting the value of the useState to the current index
  const setCategory = (index) => {
    setFoodCategory(index)
  }

  return (
    <div className="menu">
      <MenuTexts />

      <div className="buttonsContainer">
        {titleArr.map((title, index) => {
          return (
            <MenuButtons
              key={index}
              title={title}
              setClick={setCategory}
              index={index}
              foodCategory={foodCategory}
            />
          )
        })}
      </div>

      <div className="menu-content">
        {/* conditionally rendering the active subcategory */}
        {foodCategory === 1 && <DynamicPage array={mains} />}

        {foodCategory === 2 && <DynamicPage array={drinks} />}

        {foodCategory === 0 && <DynamicPage array={desserts} />}
      </div>
    </div>
  )
}

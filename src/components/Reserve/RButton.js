import React from 'react'
import ReserveButton from './ReserveButton'
import Jump from 'react-reveal/Jump'

function RButton() {
  return (
    <div className="r-button">
      <Jump delay={1500} count={20}>
        {<button className="custom-btn main-button">Register Now</button>}
      </Jump>
    </div>
  )
}

export default RButton

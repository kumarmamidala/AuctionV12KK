import React from 'react'

function ReserveButton(props) {
  return (
    <a onClick={props.btnClicked} className=" custom-btn main-button" href="/">
      {props.text}
    </a>
  )
}

export default ReserveButton

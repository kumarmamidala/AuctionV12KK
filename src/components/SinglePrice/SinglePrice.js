import React from 'react'
import "./SinglePrice.css"

function SinglePrice() {
  return (
    <div><div className="containerrrr">
    <div className="checkout-card">
      <div className="title">
        <p><span>Get unltimate access</span> <br/> to everything</p>
      </div>
      <div className="price-container">
        <div className="price-card">
          <input name="price" id="monthly" type="radio"/>
          <div className="content">
           Buy Now
            <span>$600</span>
          </div>
          <label for="monthly"></label>
        </div>
        
        <div className="price-card">
          <input name="price" type="radio" id="yearly"/>
          <div className="content">
           Installments
            <span>$23/month</span>
          </div>
          <label for="yearly"></label>
        </div>
        
      </div>
      <div className="detail-info">
        <div className="info">
          <h3>Total billed $50</h3>
          <small>Enter your credit card detail to complete subscription</small>
        </div>
      
        <div className="info">
          <h3>Total billed $50</h3>
          <small>Enter your credit card detail to complete subscription</small>
        </div> <div className="info">
          <h3>Total billed $50</h3>
          <small>Enter your credit card detail to complete subscription</small>
        </div>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit error omnis sunt magnam ipsam. Quod laboriosam ducimus veritatis explicabo, nulla atque. Maiores neque autem velit?</p>
        
        <button className="btn">Continue</button>
      </div>
    </div>
  </div></div>
  )
}

export default SinglePrice
import React from 'react'
import "./FlowCards.css"

function FlowCards2() {
  return (
    <div>
      {' '}
      <div className="rates">
        <div className="rates_tiles">
          <div className="rates_tiles--item">
            <div className="rates_tiles--item-inner">
              <p className="title">Sold Before Auction</p>
              <div className="rate">
                <div className="rate_orb">
                  <div className="rate_orb--inner">
                    2
                    <sub>
                      .5<span>%</span>
                    </sub>
                  </div>
                </div>
              </div>
              <div className="description">Seller pays 2.5%</div>
            </div>
          </div>
          <div className="rates_tiles--item rates_tiles--item-special">
            <div className="rates_tiles--item-inner">
              <p className="title">Sold At Auction</p>
              <div className="rate">
                <div className="rate_orb">
                  <div className="rate_orb--inner">
                    0
                    <sub>
                      <span>%</span>
                    </sub>
                  </div>
                </div>
              </div>
              <div className="description">Seller pays 0%</div>
              <div className="disclaimer">buyer pays auction fees</div>
            </div>
          </div>
          <div className="rates_tiles--item">
            <div className="rates_tiles--item-inner">
              <p className="title">Sold After Auction</p>
              <div className="rate">
                <div className="rate_orb">
                  <div className="rate_orb--inner">
                    2
                    <sub>
                      .5<span>%</span>
                    </sub>
                  </div>
                </div>
              </div>
              <div className="description">Seller pays 2.5%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlowCards2

import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        <div className=" auction-price-card1 auction-price-card-tabs">
          <div className="auction-product-left">
            <div className="flex items-left text-left justify-between  flex-col name-div heading !text-white">
              Domain
            </div>
            <div className="premium-div heading text-white">
              <span>Category</span>
            </div>
            <div className="bid-div heading text-white">Bids</div>
            <div className="last-date-div time-left heading text-white">
              Time Left
            </div>
            <div className="price-div heading text-white">Price</div>
          </div>
        </div>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 77px) {
    .products-container {
      display: flex;
    }
  }
`;

export default GridView;

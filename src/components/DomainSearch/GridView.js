import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
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
    gap: 10px;
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media (max-width: 77px) {
    .products-container {
      display: flex;
    }
  }
`;

export default GridView;

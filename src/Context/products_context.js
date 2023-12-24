import React, { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productss, setProductss] = useState([]);

  useEffect(() => {
    fetch("https://auctionapi.shop/sam/doc/products/Availableproducts")
      .then((response) => response.json())
      .then((data) => setProductss(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ProductContext.Provider value={productss}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };

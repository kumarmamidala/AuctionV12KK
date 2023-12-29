import React, { useContext, useEffect, useState } from "react";
import { useFilterContext } from "../../Context/filter_context";
import GridView from "./GridView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if products are available to determine if data has been loaded
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]); // Use products as a dependency

  if (loading) {
    return <h2 className="loading-comment">Loading the products...</h2>; // You can customize the loading indicator as needed
  }
  return <GridView products={products}>product list</GridView>;
};

export default ProductList;

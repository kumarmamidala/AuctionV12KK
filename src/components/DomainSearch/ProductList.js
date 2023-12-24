import React, { useContext, useEffect, useState } from "react";
import { useFilterContext } from "../../Context/filter_context";
import GridView from "./GridView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  console.log(products);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous fetch of products
    const fetchProducts = async () => {
      try {
        // Fetch your products here (replace the setTimeout with your actual API call)
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulating a 2-second delay
        // Once products are fetched, set loading to false
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle error if needed
        setLoading(false);
      }
    };

    // Call the fetchProducts function
    fetchProducts();
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  if (loading) {
    return (
      <h5
        style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        className="paragraph"
      >
        Loading...
      </h5>
    );
  }

  if (products.length < 1) {
    return (
      <h5 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        No Products found..
      </h5>
    );
  }

  return <GridView products={products}>product list</GridView>;
};

export default ProductList;

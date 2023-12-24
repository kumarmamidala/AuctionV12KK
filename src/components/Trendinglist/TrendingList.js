import React, { useContext } from "react";
import "./Trending.css";
import Data2 from "./Data";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/products_context";

const Trending = () => {
  const products = useContext(ProductContext);
  return (
    <div className="rounded-div my-1 py-5 pt-2 text-primary Trending-part">
      <h1 className="text-3xl font-bold py-8 trend-head !ml-0 title">
        Latest and Greatest Names on the Market
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.slice(0, 12).map((coin) => {
          const imageUrl = `data:image/jpeg;base64,${btoa(
            new Uint8Array(coin.src1.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          )}`;
          return (
            <Link to={`/Marketplace/${coin.ID}`} key={coin.ID}>
              <div className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300 Trending-item">
                <div className="flex w-full items-center justify-between">
                  <div className="flex">
                    <img
                      src={imageUrl}
                      alt={coin.Name}
                      className="trending-icon"
                    />
                    <div>
                      <p className="font-bold heading-sub">{coin.Name}</p>
                      <p className="paragraph">{coin.symbol}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="paragraph">{coin.Price}/yr</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;

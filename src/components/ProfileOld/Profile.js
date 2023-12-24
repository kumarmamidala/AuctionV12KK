import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import "./Profile2.css";

import person from "./Media/person.png";
import address from "./Media/images.jpeg";
import products from "./Media/products.png";
import axios from "axios";
import { useEffect } from "react";

function Profile2() {
  const { isAuth, logoutme, loginUser } = useContext(AuthContext);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const requestData = {
      owner: loginUser.username,
    };

    axios
      .get("https://auctionapi.shop/sam/doc/products/userproducts", {
        params: requestData,
      })
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
        console.log(loginUser.username);
        console.log(requestData, "requested data");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loginUser.username]);

  return (
    <div>
      <div class="profile-page">
        <div class="products-part">
          <div class="owned-part">
            <div>
              <h1 class="title1 mt-6">Owned Products</h1>
            </div>
            <hr class="w-full" />
            <div class="basic-info">
              {/* <div class="image-part">
              <img
                src={products}
                alt="Person Image"
                class="person-image text-center"
              />
            </div> */}
              <div className="info-part1">
                {post.map((product) => {
                  const imageUrl = `data:image/jpeg;base64,${btoa(
                    new Uint8Array(product.src1.data).reduce(
                      (data, byte) => data + String.fromCharCode(byte),
                      ""
                    )
                  )}`;
                  return (
                    <li key={product.ID}>
                      <img src={imageUrl} class="user-product-image" />
                      <h1 className="heading ml-[40px]">
                        Domain:{" "}
                        <span className="heading-gold"> {product.Name}</span>
                      </h1>
                      <h1 className="heading font-thin ml-[40px] ">
                        Renewal: {product.Renewal}
                      </h1>
                      <h1 className="heading font-thin ml-[40px] mb-[40px]">
                        <span>Price: Rs.{product.Price}</span>
                      </h1>

                      <div></div>
                    </li>
                  );
                })}

                <ul></ul>
              </div>
            </div>
          </div>
          <div class="owned-part">
            <div>
              <h1 class="title1 mt-6">Bid Products</h1>
            </div>
            <hr class="w-full" />
            <div class="basic-info">
              {/* <div class="image-part">
              <img
                src={products}
                alt="Person Image"
                class="person-image text-center"
              />
            </div> */}
              <div className="info-part1">
                {post.map((product) => {
                  const imageUrl = `data:image/jpeg;base64,${btoa(
                    new Uint8Array(product.src1.data).reduce(
                      (data, byte) => data + String.fromCharCode(byte),
                      ""
                    )
                  )}`;
                  return (
                    <li key={product.ID}>
                      <img src={imageUrl} class="user-product-image" />
                      <h1 className="heading ml-[40px]">
                        Domain:{" "}
                        <span className="heading-gold"> {product.Name}</span>
                      </h1>
                      <h1 className="heading font-thin ml-[40px] ">
                        Renewal: {product.Renewal}
                      </h1>
                      <h1 className="heading font-thin ml-[40px] mb-[40px]">
                        <span>Price: Rs.{product.Price}</span>
                      </h1>

                      <div></div>
                    </li>
                  );
                })}

                <ul></ul>
              </div>
            </div>
          </div>
        </div>
        <div class="profile-part">
          <div class="profile-inner-part">
            <div class="personal-info-heading">
              <h1 class="title-white text-center py-2 mt-6 !text-white">
                Personal Info
              </h1>
            </div>
            <hr class="w-full" />
            <div class="basic-info1">
              <div class="image-part">
                <img
                  src={person}
                  alt="Person Image"
                  class="person-image text-center"
                />
              </div>
              <div class="info-part">
                <h1 className="!text-left">
                  <span className="title-sub !text-black">Name: </span>
                  <span class="title-sub !font-bold !text-black">
                    {loginUser.firstName} {loginUser.lastName}{" "}
                  </span>
                </h1>
                <h1 className="title-sub !text-black !text-left">
                  User Name:{" "}
                  <span class="!font-bold">{loginUser.username}</span>
                </h1>
                <h1 class="title-sub !text-black !text-left">
                  Email id:
                  <span class="!font-bold"> {loginUser.email_id}</span>
                </h1>
              </div>
            </div>
            <hr class="w-full" />
            <div class="basic-info1">
              <div class="image-part">
                <img
                  src={address}
                  alt="Person Image"
                  class="person-image text-center"
                />
              </div>
              <div class="info-part">
                <h1 className="!text-left">
                  <span className="paragraph !text-black">
                    Mobile Number:
                    <span class="!font-bold">{loginUser.mobile_number}</span>
                  </span>
                </h1>
                <h1 className="paragraph !text-black !text-left">
                  <span class="paragraph font-thin !text-black">
                    PAN:
                    <span class="!font-bold">{loginUser.PAN}</span>
                  </span>
                </h1>
                <h1 class="paragraph !text-black !text-left">
                  Account Created at:
                  <span class="!font-bold">
                    <br /> {loginUser.createdAt}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile2;

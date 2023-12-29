import React, { useContext } from "react";
import { useState } from "react";
import TopBar from "../components/TopBar";
import { ProductContext } from "../Context/products_context";
import Footerr from "../components/Footerr/Footerr";
import { Contacts } from "@mui/icons-material";
import ContactSec from "../components/Profile/ContactSec";

function PostaBid() {
  const [showModal] = useState(false);
  const [imgUrls] = useState([]);

  const products = useContext(ProductContext);

  return (
    <div>
      <TopBar />
      <div class="pb-[40px] !pt-[80px] post-a-bid-part">
        <div className="max-w-3xl mx-auto p-3  flex flex-col !items-center justify-center sm:p-12  rounded-md bg-white post-a-bid-box">
          <div className="text-3xl font-bold !mb-3   title">Post a Bid</div>
          <form className="flex flex-col  w-full">
            <div className="space-y-4 w-full">
              <div className="flex space-x-2">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="location"
                    aria-required
                    class="heading-post text-black text-[20px] "
                  >
                    Domain Name
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter domain name"
                    className="w-full   input-section"
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="flex flex-col w-2/4">
                  <label
                    htmlFor="category"
                    aria-required
                    class="heading-post text-black"
                  >
                    Platform
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    className="input-section"
                    placeholder="Enter platform name"
                  ></input>
                </div>
                <div className="w-2/4">
                  <label htmlFor="year" class="heading-post text-black">
                    Price
                  </label>
                  <input
                    type="text"
                    min={0}
                    name="year"
                    placeholder="Enter Price"
                    className="w-full input-section"
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="flex flex-col w-2/4">
                  <label
                    htmlFor="location"
                    aria-required
                    class="heading-post text-black"
                  >
                    Final Price
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter final price"
                    className="w-full input-section"
                  />
                </div>
                <div className="w-2/4">
                  <label htmlFor="mileage" class="heading-post text-black">
                    Deadline
                  </label>
                  <input
                    type="number"
                    min={0}
                    name="mileage"
                    placeholder="Enter deadline"
                    className="w-full input-section"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="price" class="heading-post text-black">
                  Domain Expiry Date
                </label>
                <input
                  type="number"
                  min={0}
                  name="price"
                  placeholder="Enter domain expiry date"
                  className="w-full input-section"
                />
              </div>

              <div className="flex space-x-2">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="description"
                    aria-required
                    class="heading-post text-black"
                  >
                    Description
                    <textarea
                      placeholder="Enter description"
                      name="description"
                      className="w-full min-h-[100px] p-3 rounded-md    focus:outline-none mt-1 paragraph input-section"
                    />
                  </label>
                </div>
              </div>
            </div>
            {showModal ? (
              <div className="flex overflow-scroll space-x-2">
                {products.map((item, idx) => (
                  <img
                    src={item.pic}
                    className="w-[248px] aspect-video object-cover"
                  />
                ))}
              </div>
            ) : null}

            <button
              type="submit"
              className="  custom-btn main-button w-full mt-[20px]"
            >
              Post
            </button>
          </form>
        </div>
      </div>
      <ContactSec />
      <Footerr />
    </div>
  );
}

export default PostaBid;

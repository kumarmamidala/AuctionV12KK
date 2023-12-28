import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../Context/filter_context";
import { getUniqueValues } from "../../utils/helpers";

const Filters = () => {
  const {
    filters: {
      text,
      Category,
      Speciality,
      min_price,
      Price,
      max_price,
      Shipping,
    },
    filtered_products: products,
    updateFilters,
    clearFilter,
    all_products,
    sort,
    updateSort,
  } = useFilterContext();
  const Categories = getUniqueValues(all_products, "Category");
  const Companies = getUniqueValues(all_products, "Speciality");
  return (
    <Wrapper>
      <div className="contentfilter">
        <p class="!font-bold paragraph ">{products.length} products found</p>
        <form onSubmit={(e) => e.preventDefault()} className="">
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="search-input"
              value={text}
              onChange={updateFilters}
              class="login-signup-input domain-auctions-input"
            />
          </div>
          {/* end search input */}
          {/* categories */}
          <div className="form-control">
            <h5>Category</h5>
            <div>
              {Categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="Category"
                    fontFamily="Haffer"
                    className={`${
                      Category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* companies */}
          <div className="form-control mb-4">
            <h5 className="mb-0 pt-2">Speciality</h5>
            <select
              name="Speciality"
              value={Speciality}
              onChange={updateFilters}
              className="company mt-2 pr-5 capitalize login-signup-input domain-auctions-input !text-white"
            >
              {Companies.map((c, index) => {
                return (
                  <option key={index} value={c} className="!text-white">
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of companies */}

          <form
          // className="label-style"
          >
            <label htmlFor="sort" class="paragraph form-control">
              <h5>sort by&nbsp;&nbsp; &nbsp;&nbsp;</h5>
            </label>
            <select
              name="sort"
              id="sort"
              className="sort-input"
              class="login-signup-input domain-auctions-input !text-white"
              value={sort}
              onChange={updateSort}
            >
              <option value="price-lowest" class="paragraph">
                price (lowest)
              </option>
              <option value="price-highest" class="paragraph">
                price (highest)
              </option>
              <option value="name-a" class="paragraph">
                name (a-z)
              </option>
              <option value="name-z" class="paragraph">
                name (z-a)
              </option>
            </select>
          </form>

          {/* price */}
          <div className="form-control mb-0 price-below-part">
            <h5>Price Below </h5>
            <p className="price">{Price}</p>

            <input
              type="range"
              name="Price"
              min={min_price}
              max={max_price}
              onChange={updateFilters}
              value={Price}
              className="price-below-part"
            />
          </div>

          {/* end of  shippping */}
        </form>
        <button
          type="button"
          className="custom-btn main-button ml-20px !py-4px !px-16px w-full"
          onClick={clearFilter}
        >
          {" "}
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  form {
    margin: 0px;
  }
  .form-control {
    margin-bottom: 0.25rem;
    border: none;
    letter-spacing: var(--spacing);
    background: transparent;
    h5 {
      margin-bottom: 0.5rem;
      font-size: 18px;
      font-weight: 800;
      text-transform: uppercase;
      color: var(--text-white);
      margin-top: 25px;
    }
  }
  .search-input {
    border-radius: 4px;
    border: 1px solid black !important;
  }
  .search-input:focus {
    border: 1px solid black !important;
  }
  .search-inputtt {
    padding: 1rem;
    background: var(--clr-grey-10);
    border-radius: 10px;
    border-color: var(--text);
    letter-spacing: var(--spacing);
  }
  .search-inputtt::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 10px 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    letter-spacing: var(--spacing);
    cursor: pointer;
    color: var(--text-white);
    font-size: 16px;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: 6px;
    border-color: var(--text);
    padding: 8px 12px;
    font-size: 16px;
    width: 100%;
    color: var(--text);
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.5rem;
    font-weight: 800;
    font-size: 18px;
    color: var(--text-white);
  }
  .shipping {
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1.3rem;
    margin-top: -25px;
  }
  .clear-btn {
    background: #fbcb04;
    color: var(--clr-white);
    font-weight: bold;
    padding: 7px 16px;
    margin-left: 8%;
    border-radius: 6px;
    font-size: 18px;
    border-bottom: 2px solid black;
  }
  .clear-btn:hover {
    background: #ffe053;
    color: var(--text);
  }

  .contentfilter {
    box-shadow: 0px 0px 2px grey;
    border-radius: 10px;
    padding: 7px 15px;
    top: 100px;
    background: var(--pent-bg);
  }

  @media (min-width: 768px) {
    .contentfilter {
      position: sticky;
    }
  }
  .popular {
    font-size: 18px;
  }
  @media only screen and (max-width: 767px) {
    .price-below-part {
      width: 100%;
    }
  }
`;

export default Filters;

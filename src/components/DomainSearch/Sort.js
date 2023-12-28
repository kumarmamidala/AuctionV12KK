import React from "react";
import { useFilterContext } from "../../Context/filter_context";
import { MdDomainVerification } from "react-icons/md";
import styled from "styled-components";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  const Icon = ({ isActive, isAscending }) => {
    return (
      <span className={`icon ${isActive ? "active" : ""} sort-iconn`} >
        {isActive ? (
          isAscending ? (
            <AiOutlineArrowUp  />
          ) : (
            <AiOutlineArrowDown />
          )
        ) : null}
      </span>
    );
  };

  const isNameSort = sort.startsWith("name");
  const isAscending = sort.endsWith("-a");

  const handleSortClick = (sortOption) => {
    // Determine the current sort order and toggle it
    const currentSortOrder = sort.endsWith("-a") ? "-a" : "-z";
    const newSortOption =
      sortOption + (currentSortOrder === "-a" ? "-z" : "-a");
    updateSort({ target: { value: newSortOption } });
  };

  return (
    <Wrapper>
      <div className=" auction-price-card1 auction-price-card-tabs">
        <div className="auction-product-left">
          <div
            className={`items-left text-left flex flex-nowrap name-div cursor-pointer text-white heading ${
              isNameSort ? "active" : ""
            }`}
            onClick={() => handleSortClick("name")}
          >
            Domain
            <Icon isActive={isNameSort} isAscending={isAscending} />
          </div>
          <div className="premium-div heading text-white">
            <span>Category</span>
          </div>
          <div className="bid-div heading text-white">Bids</div>
          <div className="last-date-div time-left heading text-white">
            Time Left
          </div>
          <div className="price-div heading text-white">
            <span>Price</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-top: 0px;
  position: sticky;
  top: 100px;
  z-index: 99;
  box-shadow: 0px -21px 0px 10px var(--primary-bg);
  column-gap: 2rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  .label-style {
    width: 100%;
    margin: 0px;
  }
  @media only screen and (max-width: 767px) {
    .label-style {
      margin-left: 66px;
    }
  }
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    btnn-container {
      width: 30px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
      font-size: 1.2rem;
      color: var(--text);
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    column-gap: 0rem;
  }
  hr {
    border: none;
    border-top: 1px solid var(--primary-bg);
    left: 5%;
    position: relative;
    width: 80%;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
    color: var(--text);
    font-weight: 700;
  }
  form {
    width: 85%;
    display: block;
    flex-direction: column;
    margin: 15px;
    position: relative;
    right: 66px;
  }
  .btnn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid black;
      border-radius: 4px;
      color: var(--clr-black);
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: transparent !important;
      color: var(--primary-bg);
      border: 1px solid var(--primary-bg);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 20px;
    color: var(--text);
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: transparent;
    color: var(--text);
  }
  .sort-input:focus {
    outline: 0px;
  }
  label {
    font-size: 1.2rem;
    color: var(--text);
    font-weight: 500;
    text-transform: capitalize;
    padding-top: 0px;
  }
`;

export default Sort;

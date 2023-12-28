import React from "react";
import { Filters, ProductList, Sort } from "../components/DomainSearch";
import styled from "styled-components";
import { DataFeaturedQuestions } from "../components/FAQs/Data";
import Questions from "../components/FAQs/Questions";
import TopBar from "../components/TopBar";
import Footerr from "../components/Footerr/Footerr";

function Featured() {
  return (
    <div>
      <TopBar />
      <Wrapper>
        <div className="section-center products">
          <div className="filter-div">
            <Filters />
          </div>

          <div className="products-div">
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
      {/* <Table rows={Tablerows} columns={Tablecolumns} /> */}
      <Questions data={DataFeaturedQuestions} />
      <Footerr />
    </div>
  );
}

const Wrapper = styled.div`
  .products {
    display: flex;
    gap: 3rem 1.5rem;
  }
  @media screen and (min-width: 1910px) {
    .products {
      width: 100% !important;
      padding: 0px 19rem;
      padding-top: 100px;
    }
  }
  /* section */
  .section {
    padding: 5rem 0;
  }
  .page {
    padding: 3rem 0;
  }
  .page {
    min-height: calc(100vh - (20vh + 10rem));
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 220px 1fr;
      z-index: 2;
      position: relative;
    }
  }

  @media (max-width: 767px) {
    .products {
      padding: 120px 30px 20px;
    }
  }
`;

export default Featured;

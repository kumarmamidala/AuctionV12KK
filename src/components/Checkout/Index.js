import { useContext, useEffect, useState } from "react";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./Page4/Page4";
import MultiStepProgressBar from "./ProgressBar/Progressbar";
import Footerr from "../Footerr/Footerr";

function IndexCheckout() {
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        alert("Ooops! Seems like you did not fill the form.");
        break;
      default:
        setPage("1");
    }
  };

  return (
    <div className="checkout-pages">
      <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
      {
        {
          pageone: <Page1 onButtonClick={nextPage} />,
          pagetwo: <Page2 onButtonClick={nextPage} />,
          pagethree: <Page3 onButtonClick={nextPage} />,
          pagefour: <Page4 />,
        }[page]
      }
      <Footerr />
    </div>
  );
}

export default IndexCheckout;

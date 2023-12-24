import React from "react";
import Card from "./Card";
import { BsFlag, BsGeoAltFill } from "react-icons/bs";
import { BiDirections, BiCompass } from "react-icons/bi";
import SectionHeading from "./SectionHeading";
import { FaBrain } from "react-icons/fa";
import { GiPuzzle } from "react-icons/gi";
import { GiHexagonalNut, GiMoebiusStar } from "react-icons/gi";

const featureData = [
  {
    id: 1,
    icon: <FaBrain />,
    title: "Memorableness",
    subtitle:
      "Is the domain short enough? Is it easy to remember? Short and memorable domain names usually have more worth.",
    review: "100 plus Reviews",
  },
  {
    id: 2,
    icon: <GiPuzzle />,
    title: "Language complexity",
    subtitle:
      "How complex is your actual domain name? Does it contain special characters? Simple domains names are more worthy",
    review: "100 plus Reviews",
  },
  {
    id: 3,
    icon: <GiHexagonalNut />,
    title: "Suitable Search Engine ",
    subtitle:
      "Can the domain name be used on an international scale? Does the name function locally or globally? Global functional domains are more worthy.",
    review: "100 plus Reviews",
  },
  {
    id: 4,
    icon: <GiMoebiusStar />,
    title: "Advertising potential",
    subtitle:
      "Could domain be used for advertising campaigns? How does the name sound? Domains with more advertising potential are worth more.",
    review: "100 plus Reviews",
  },
];

const Featured = () => {
  const heading = {
    // subHeading: 'Core Features',
    headingOne: "Domain Appraisals: ",
    headingTwo: "The Strategy",
    describe:
      "Unlocking Domain Worth: A Comprehensive Analysis for Maximum Appraisal",
  };

  return (
    <div className="w-full mx-auto px-[50px] pb-10 featured-section">
      <SectionHeading heading={heading} />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3">
        {featureData.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Featured;

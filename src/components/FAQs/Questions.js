import React from "react";
import SectionHeading from "./SectionHeading";
import Fade from "react-reveal/Fade";

const Questions = ({ data }) => {
  const heading = {
    subHeading: "Faq",
    headingOne: "Frequently Asked",
    headingTwo: "Questions",
    // describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  };
  return (
    <div class="faq-section">
      <Fade bottom>
        <SectionHeading heading={heading} />
      </Fade>
      <Fade bottom>
        <div className="w-11/12 mx-auto mb-10 md:!ml-20">
          <div className="grid   lg:gap-4">
            {data.map((item) => {
              return (
                <div>
                  <details className="group border-l-4 border-[#281c54] bg-transparent px-[15px] py-[10px] [&_summary::-webkit-details-marker]:hidden mb-2 shadow-xl rounded-xl md:mr-[20px] single-faq">
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-xl !font-bold  text-gray-900 heading-sub1">
                        {item.q}
                      </h2>
                      <span className="ml-1.5 flex-shrink-0 rounded-full  bg-opacity-[90%] p-1.5 text-white ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-8 h-8 transition duration-300 group-open:-rotate-45 text-[32px] text-pent"
                          viewBox="0 0 20 20"
                          fill="#5FA8D3"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-[0.5rem] mb-[1rem] leading-relaxed text-gray-700 paragraph ">
                      {item.a}
                    </p>
                  </details>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Questions;

import DestinationData from "./Data";
import DetailsPageSlider from "./DetailsPageSlider";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import "./DetailsPageSlider.css";

function MainDetail() {
  const params = useParams();
  return (
    <div>
      <div className="details_banner">
        <section className="hotel_banner mt-6">
          <div className="container mx-auto px-2 pb-2">
            <DetailsPageSlider slider={DestinationData} price="" />
            {/* search part */}

            {/* search part */}
            {/* delux part */}
            <div className="delux_part py-[42px]">
              <div className="container mx-auto px-2">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 lg:col-span-10 lg:mr-28">
                    <div className="flex items-start justify-between flex-col lg:flex-row mb-[26px]"></div>
                    <p className="font-normal text-sm lg:text-base text-[#0e0e0e] paragraph">
                      1
                      <strong className="lobster capitalize">
                        .<span className="text-red-700">.</span>
                      </strong>
                      When you and the seller reach an agreement, we'll provide
                      a free purchase agreement that's been designed especially
                      for domain deals. Pay into a neutral account that Domohost
                      Auction has given via wire transfer, PayPal, or credit
                      card.
                      <br />
                      <br />
                      <br />
                      In order to transfer the domain fast and securely to your
                      registrar account, our transfer professionals collaborate
                      with you and the seller. increased security The vendor
                      will not receive payment until domain ownership has been
                      legally transferred. The transfer of the domain is
                      finished once you have full control of it.
                    </p>
                    <ul className="grid grid-cols-12 mt-5">
                      <li className="check_in list-disc ml-5 col-span-12 lg:col-span-4">
                        <h4 className="font-medium text-xl lg:text-xl text-black mb-2 heading">
                          Starting of bidding
                        </h4>
                        <p className="font-normal text-sm lg:text-base text-[#0F0E0E]/50 mb-2 paragraph">
                          From 11-12-2022 9am
                        </p>
                        <p className="font-normal text-sm lg:text-base text-[#0F0E0E]/50 mb-2 paragraph">
                          Hurry up!
                        </p>
                      </li>
                      <li className="check_out list-disc col-span-12 lg:col-span-8 ml-5">
                        <h4 className="font-medium text-xl text-black mb-2 heading">
                          End of bidding
                        </h4>
                        <p className="font-normal text-sm lg:text-base text-[#0F0E0E]/50 mb-2 paragraph">
                          1-1-2023
                        </p>
                        <p className="font-normal text-sm lg:text-base text-[#0F0E0E]/50 mb-2 paragraph">
                          Buy before timeout!
                        </p>
                      </li>
                    </ul>
                    <div className="question lg:basis-auto focus:outline-none focus:ring-0 bg-gradient-to-r from-[#be9e57] to-[#ddba52] rounded-[10px] text-white w-[210px] mt-8 lg:mt-16">
                      <div className="shadow rounded-md px-4 max-w-sm mx-auto">
                        <div className="flex items-center space-x-4 py-2">
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                stroke="#fff"
                                strokeMiterlimit="10"
                                strokeWidth="1.5"
                                d="M19.04 15.903c0 .33-.074.669-.23.999-.156.33-.357.642-.623.935-.45.495-.944.852-1.504 1.082-.55.229-1.145.348-1.787.348-.935 0-1.934-.22-2.988-.67a16.103 16.103 0 01-3.154-1.814 26.352 26.352 0 01-3.006-2.567A26.042 26.042 0 013.19 11.22c-.752-1.045-1.357-2.09-1.797-3.126-.44-1.045-.66-2.044-.66-2.998 0-.623.11-1.219.33-1.769a4.22 4.22 0 011.055-1.53c.586-.578 1.228-.862 1.906-.862.257 0 .514.055.743.165.238.11.449.275.614.513l2.127 2.997c.165.23.284.44.366.642.083.193.129.385.129.56 0 .22-.065.44-.193.65-.12.21-.293.43-.513.65l-.697.725a.49.49 0 00-.147.367c0 .073.01.137.028.21.027.074.055.129.073.184.165.302.45.697.853 1.173.412.477.852.963 1.329 1.449.495.485.972.935 1.457 1.347.477.403.871.678 1.183.843.046.019.1.046.165.074a.633.633 0 00.23.036.504.504 0 00.375-.155l.697-.688c.229-.23.449-.403.66-.513a1.22 1.22 0 01.65-.193c.175 0 .358.037.56.12.201.082.412.201.641.357l3.034 2.154c.239.165.404.358.505.587.091.229.146.458.146.715z"
                              ></path>
                              <path
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M15.858 7.35c0-.55-.43-1.392-1.072-2.08-.587-.632-1.366-1.127-2.136-1.127M19.067 7.35A6.412 6.412 0 0012.65.934"
                              ></path>
                            </svg>
                          </div>

                          <div className="flex-1 space-y-6 py-0.5">
                            <p className="font-normal text-sm text-white leading-4">
                              Have a question?
                            </p>
                            <a
                              className="text-white font-bold text-sm"
                              href="tel:3104372766"
                            >
                              7097979294
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-2">
                    <h2 className="font-semibold text-2xl text-[#fbcb04] mb-8 heading">
                      Facilitics
                    </h2>
                    <ul>
                      <li className="flex items-center justify-start gap-2 mb-3 font-medium text-sm lg:text-lg    paragraph">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <path
                            stroke="#BE9E57"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M16 22.5a5 5 0 100-10 5 5 0 000 10zM24.5 14.5a7.475 7.475 0 016 3M1.5 17.5a7.474 7.474 0 016-3M8.8 27a8.012 8.012 0 0114.4 0M7.5 14.5a4 4 0 113.925-4.75M20.575 9.75A4 4 0 1124.5 14.5"
                          ></path>
                        </svg>
                        Short .Gold Domains
                      </li>
                      <li className="flex items-center justify-start gap-2 mb-3 font-medium text-sm lg:text-lg  paragraph">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <path
                            stroke="#BE9E57"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M11.612 20.762a6.337 6.337 0 018.775 0M7.375 16.513a12.35 12.35 0 0117.25 0M3.138 12.275a18.325 18.325 0 0125.725 0"
                          ></path>
                          <path
                            fill="#BE9E57"
                            d="M16 26.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
                          ></path>
                        </svg>
                        Top Level Domains
                      </li>
                      <li className="flex items-center justify-start gap-2 mb-3 font-medium text-sm lg:text-lg  paragraph">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <path
                            stroke="#BE9E57"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M3 28h26M7 28V5a1 1 0 011-1h16a1 1 0 011 1v23"
                          ></path>
                          <path
                            fill="#BE9E57"
                            d="M19.5 17.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
                          ></path>
                        </svg>
                        Bid your Domains
                      </li>
                      <li className="flex items-center justify-start gap-2 mb-3 font-medium text-sm lg:text-lg  paragraph">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <path
                            stroke="#BE9E57"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M10.5 4v5M10.5 14.5V28M14 4l1 6a4.5 4.5 0 11-9 0l1-6M25.5 20h-7s1.5-14 7-16v24"
                          ></path>
                        </svg>
                        Domain Auctions
                      </li>
                      <li className="flex items-center justify-start gap-2 mb-3 font-medium text-sm lg:text-lg  paragraph">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="33"
                          fill="none"
                          viewBox="0 0 32 33"
                        >
                          <path
                            fill="#BE9E57"
                            fillRule="evenodd"
                            d="M10 2.348a3.412 3.412 0 00-2.588 2.488c-.103.414-.106.609-.106 6.601v6.175l-.28.133c-.544.26-.942.173-1.855-.403-.191-.12-.35-.214-.355-.21-.004.005-.19.317-.412.693-.467.792-.504.657.306 1.136.81.48.971.529 1.742.527.804-.002.985-.06 1.906-.609.815-.486.937-.534 1.334-.526.35.007.364.013 1.43.644.746.441.921.492 1.68.491.805-.002.986-.06 1.907-.609.816-.486.937-.534 1.334-.526.35.007.364.013 1.43.644.746.441.921.492 1.681.491.804-.002.985-.06 1.906-.609.816-.486.937-.534 1.334-.526.35.007.364.013 1.43.644.746.441.922.492 1.681.491.804-.002 1.004-.065 1.9-.603.564-.338.6-.37.545-.479-.033-.064-.214-.38-.4-.704l-.341-.588-.167.088c-.091.048-.312.18-.491.29-.458.286-.738.388-1.06.387-.32-.002-.55-.098-1.191-.494-.633-.392-1.058-.576-1.505-.652-.759-.13-1.388.03-2.31.589-.77.466-.992.558-1.352.558-.306 0-.485-.079-1.432-.631l-.466-.271.012-5.88.012-5.88.133-.267c.316-.634.873-.99 1.549-.99.69 0 1.247.363 1.54 1.006.135.294.141.348.157 1.44l.016 1.136H22.25V6.435c-.002-1.285-.06-1.656-.357-2.276-.269-.562-.9-1.217-1.424-1.475-.48-.237-1.084-.392-1.527-.392-.444 0-1.073.161-1.54.394-.511.256-1.147.919-1.412 1.473-.353.735-.356.773-.357 4.6v3.433H8.904l.015-3.487.014-3.487.13-.27c.52-1.083 1.923-1.333 2.746-.49.115.118.27.349.347.514.134.29.14.344.157 1.436l.017 1.135h1.594V6.43c0-.928-.018-1.182-.106-1.534-.244-.978-.871-1.79-1.712-2.214-.682-.345-1.457-.468-2.105-.334zm5.619 12.948l.014 1.435-.12.002c-.237.002-.838.262-1.41.609-.73.442-.965.538-1.315.537-.308 0-.59-.116-1.17-.481-.498-.313-.93-.526-1.244-.616-.29-.082-1.084-.104-1.32-.036l-.147.042v-2.956l3.349.014 3.349.014.014 1.436zm-6.395 6.907c-.43.067-.804.224-1.494.63-.796.47-.911.516-1.282.516-.364 0-.446-.031-1.106-.429-.343-.206-.514-.28-.552-.242-.099.102-.784 1.299-.763 1.334.046.076 1.076.674 1.378.8.442.184 1.293.232 1.791.101.346-.09.43-.133 1.431-.714.909-.527 1.183-.516 2.168.088.911.558 1.17.655 1.848.688.728.037 1.089-.057 1.788-.461 1-.58 1.111-.636 1.33-.677.384-.073.701.033 1.428.476.85.517 1.311.677 1.956.677.627 0 1.001-.109 1.637-.477 1.172-.679 1.187-.685 1.54-.685.393 0 .564.069 1.256.505.892.562 1.082.623 1.927.625.615.002.762-.015 1.002-.115.358-.148 1.514-.834 1.488-.883-.01-.02-.192-.338-.403-.707-.324-.566-.398-.663-.475-.62-.05.027-.278.163-.506.3-.578.351-.753.416-1.113.416-.355 0-.533-.075-1.334-.565a6.751 6.751 0 00-.789-.422 2.94 2.94 0 00-2.044.002c-.158.06-.562.272-.898.47-.797.47-.912.515-1.286.515-.355 0-.533-.075-1.334-.565a6.751 6.751 0 00-.789-.422 2.94 2.94 0 00-2.044.002c-.158.06-.562.272-.898.47-.795.468-.912.515-1.28.515-.374 0-.496-.05-1.306-.543-.9-.55-1.536-.718-2.272-.603zm-.303 5.333c-.32.088-.718.287-1.384.69-.94.569-1.242.563-2.216-.042-.266-.165-.496-.287-.512-.27-.016.016-.205.33-.42.698L4 29.281l.225.143c.752.48 1.112.66 1.531.768.825.214 1.557.072 2.457-.474.775-.47 1.004-.578 1.307-.61.378-.04.579.035 1.373.515 1.041.629 1.691.782 2.517.594.424-.097.697-.225 1.615-.76.6-.352.953-.434 1.333-.311.114.037.513.251.886.477 1.042.629 1.692.782 2.517.594.425-.097.697-.225 1.615-.76.6-.352.954-.434 1.333-.311.114.037.513.251.886.477.892.538 1.19.638 1.91.638.426 0 .641-.028.896-.115.33-.112 1.624-.834 1.599-.892-.088-.204-.772-1.362-.806-1.363-.024-.001-.276.138-.559.308-.995.6-1.276.598-2.268-.021-.97-.606-1.476-.766-2.244-.71-.55.04-.862.159-1.693.649-1.173.691-1.395.697-2.414.061-.97-.606-1.476-.766-2.244-.71-.55.04-.862.159-1.693.649-1.173.691-1.395.697-2.414.061-.608-.38-1.046-.585-1.413-.665-.38-.082-.988-.072-1.33.023z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Sell for Best value
                      </li>
                      <li className="flex items-center justify-start gap-2 mb-3 font-medium text-sm lg:text-lg paragraph">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#BE9E57"
                            fillRule="evenodd"
                            d="M9.817 4.03l-1.244.026-.274.134a2.9 2.9 0 00-.568.41c-.516.482-.728 1.041-.73 1.924v.45l-.576.027c-.875.042-1.27.188-1.754.653a2.14 2.14 0 00-.024 3.088c.5.499.854.634 1.802.687l.551.03.002 6.738c0 3.737.02 7.01.045 7.348.042.573.055.632.23.986a2.761 2.761 0 001.534 1.345c.277.101.3.102 4.855.12 2.517.01 4.991 0 5.498-.023l.92-.04.413-.199a2.617 2.617 0 001.22-1.197c.16-.323.182-.412.227-.938l.049-.581.43-.03c1.094-.077 1.866-.578 2.328-1.51l.204-.413.03-3.03c.016-1.666.031-4.277.035-5.802l.006-2.773.506-.03c.936-.053 1.355-.203 1.796-.643.85-.85.9-2.166.116-3.038-.452-.502-.964-.71-1.843-.75l-.575-.024v-.288c0-.574-.09-1.066-.259-1.426a2.273 2.273 0 00-1.041-1.054c-.307-.144-.35-.152-1.094-.182-.908-.036-11-.032-12.815.005zM20.67 5.57c-.07.16-.08.702-.095 6.076l-.018 5.9H8.406l.013-5.783c.012-5.403.018-5.792.095-5.933a.762.762 0 01.623-.401c.128-.01 2.794-.022 5.923-.027l5.69-.008-.079.176zm2.567-.02c.26.172.345.39.37.958l.022.481H21.975v-.41c0-.524.063-.747.266-.938a.776.776 0 01.997-.091zM7 9.222v.827l-.481-.018c-.37-.014-.525-.04-.669-.115-.465-.24-.586-.849-.244-1.221.204-.221.442-.295.96-.297L7 8.396v.826zm18.965-.775c.597.128.83.798.439 1.262-.263.313-.206.306-2.41.306h-1.996l-.013-.783c-.012-.781-.012-.783.094-.803.246-.047 3.656-.031 3.886.018zm-2.36 8.547c-.015 4.154-.034 5.603-.077 5.767-.122.469-.745.863-1.305.828l-.225-.015-.012-6.064-.012-6.065h1.65l-.02 5.549zm-3.039 2.756v.798H8.408V18.953H20.566v.797zm-.008 4.117c-.014 1.722-.023 1.928-.098 2.064a1.622 1.622 0 01-.608.581l-.197.1-5.192-.02-5.192-.019-.213-.125c-.234-.137-.484-.397-.569-.592-.037-.084-.06-.719-.07-1.986l-.017-1.862.226-.018c.125-.01 2.863-.021 6.086-.026l5.86-.008-.016 1.912z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Buy Best Domain.
                      </li>
                    </ul>
                    <div className="share">
                      <p className="font-semibold text-2xl text-[#0F0E0E]  mb-3 mt-8 heading">
                        Share
                      </p>
                      <ul className="flex items-center justify-start gap-4">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="#0F0E0E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M10 6.875c0-1.718 1.445-3.148 3.164-3.125a3.125 3.125 0 012.828 1.875h2.757L16.226 8.15A9.992 9.992 0 016.249 17.5c-2.5 0-3.125-.937-3.125-.937s2.5-.938 3.75-2.813c0 0-5-2.5-3.75-9.375 0 0 3.125 3.125 6.875 3.75v-1.25z"
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="#0F0E0E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M10 13.125a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25z"
                            ></path>
                            <path
                              stroke="#0F0E0E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M13.438 2.813H6.561a3.75 3.75 0 00-3.75 3.75v6.875a3.75 3.75 0 003.75 3.75h6.875a3.75 3.75 0 003.75-3.75V6.561a3.75 3.75 0 00-3.75-3.75z"
                            ></path>
                            <path
                              fill="#0F0E0E"
                              d="M14.063 6.719a.781.781 0 100-1.563.781.781 0 000 1.563z"
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="#0F0E0E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M16.563 2.813H3.438a.625.625 0 00-.626.624v13.126c0 .345.28.625.626.625h13.124c.346 0 .625-.28.625-.625V3.438a.625.625 0 00-.625-.626zM9.375 8.75v5M6.875 8.75v5"
                            ></path>
                            <path
                              stroke="#0F0E0E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M9.375 10.938a2.187 2.187 0 114.375 0v2.812"
                            ></path>
                            <path
                              fill="#0F0E0E"
                              d="M6.875 7.031a.781.781 0 100-1.562.781.781 0 000 1.562z"
                            ></path>
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  className="accordion mt-8"
                >
                  <Accordion.Item eventKey="0" className="accordion_item">
                    <Accordion.Header
                      className="accordion_header heading"
                      style={{
                        primaryColor: "white",
                        backgroundColor: "#fbcb04",
                      }}
                    >
                      {" "}
                      <i
                        className="fa fa-globe"
                        style={{
                          marginRight: "5px",
                          fontSize: "20px",
                          cursor: "pointer",
                          color: "#e74c3c",
                        }}
                        aria-hidden="true"
                      ></i>
                      <span class="heading-gold px-0 ml-[-15px]">
                        Domain Appraisals
                      </span>
                    </Accordion.Header>
                    <Accordion.Body class="paragraph p-4">
                      <span class="paragraph ">
                        What price range does a domain have? Clarity is
                        immediately provided for both individual domains and
                        domain portfolios by our scientifically sound domain
                        appraisal.
                      </span>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" className="accordion_item">
                    <Accordion.Header class="heading">
                      {" "}
                      <i
                        class="fa fa-user"
                        aria-hidden="true"
                        style={{
                          marginRight: "5px",
                          fontSize: "20px",
                          cursor: "pointer",
                          color: "#e74c3c",
                        }}
                      ></i>
                      <span class="heading-gold px-0 ml-[-15px]">
                        Shifting service
                      </span>
                    </Accordion.Header>
                    <Accordion.Body class="paragraph p-4">
                      <span class="paragraph">
                        Perfect for buyers and sellers alike, Secure payment of
                        the purchase price and a painless domain transfer are
                        guaranteed by our dependable Transfer Services.
                      </span>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="accordion_item">
                    <Accordion.Header class="heading">
                      {" "}
                      <i
                        className="fa fa-file-text-o"
                        style={{
                          marginRight: "5px",
                          fontSize: "20px",
                          cursor: "pointer",
                          color: "#e74c3c",
                        }}
                        aria-hidden="true"
                      ></i>
                      <span class="heading-gold px-0 ml-[-15px]">
                        Activate Calendar
                      </span>
                    </Accordion.Header>
                    <Accordion.Body class="paragraph p-4">
                      <span class="paragraph">
                        On the internet, there are currently hundreds of new
                        generic top-level domains (gTLDs) being introduced.
                        Learn about the domain suffixes that will be available
                        for registration as well as those that are already on
                        our marketplace.
                      </span>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            {/* delux part */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainDetail;

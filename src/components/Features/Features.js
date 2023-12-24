import React from 'react'
import './Features.css'
import Fade from 'react-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { GiDiceSixFacesThree } from 'react-icons/gi'
import { FaCrown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Features() {
  return (
    <div>
      {' '}
      <section className="features">
        <h1 className="title">FEATURES OF .GOLD</h1>
        <h1 className="title-sub">
          Learn how to choose the perfect domain name for your business and
          achieve success online with <br />
          our guide to popular, premium, and short domains.{' '}
        </h1>
        <div className="container">
          <div className="row mt-4 ">
            <Fade left>
              {' '}
              <div className="col-12 col-sm-6 col-md-4 features-box-part">
                <div className="as-service-box">
                  {/* <i className="fa fa-daimond" /> */}
                  <div class="MuiCardMedia-root css-1ey63fk-MuiCardMedia-root-Card-cardMedia">
                    <img
                      src="https://drata.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fx3hoqyjm3c27%2F2BYPRQFXvIhHiHG1TrHBnn%2F94983d660214cc391f4bd35a7a912c0a%2Ftriangle-spread.png&w=1920&q=75"
                      class="css-182ql0r-Media-root"
                    />
                  </div>
                  <i className="iconfadde iconfadde1">
                    {/* <FontAwesomeIcon icon={faHome} /> */}
                    <GiDiceSixFacesThree></GiDiceSixFacesThree>
                  </i>
                  <h3 className="mt-3  ml-5">
                    <h2 className="heading">Popular domain names</h2>
                  </h3>
                  <p className="paragraph-whatoffers">
                    {' '}
                    Take a look at the most popular domain names. And buy them
                    immediately. Or make a good offer.{' '}
                  </p>{' '}
                </div>
                <Link to="/PostaBid">
                  <a class="mt-3 text-[#0abcc2] underline font-semibold cursor-pointer inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </Fade>
            <Fade top>
              <div className="col-12 col-sm-6 col-md-4 features-box-part">
                <div className="as-service-box">
                  <div class="MuiCardMedia-root css-1ey63fk-MuiCardMedia-root-Card-cardMedia">
                    <img
                      src="https://images.ctfassets.net/x3hoqyjm3c27/4UGDdSTpz8xyF6L6wCLq41/506b9695e19f3e4b646b0a5ac6aff200/sqaure-spread.svg"
                      class="css-182ql0r-Media-root"
                    />
                  </div>
                  <i className="iconfadde iconfadde1">
                    {/* <FontAwesomeIcon icon={faHome} /> */}
                    <GiDiceSixFacesThree></GiDiceSixFacesThree>
                  </i>
                  <h3 className="mt-3  ml-5">
                    <h2 className="heading">3-letter domain names </h2>
                  </h3>
                  <p className="paragraph-whatoffers">
                    {' '}
                    3-letter domain names are short, sweet and super easy to
                    remember. Check ‘em all out here.
                  </p>{' '}
                  <Link to="/Solutions">
                    <a class="mt-3 text-[#0abcc2] underline font-semibold cursor-pointer inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-12 col-sm-6 col-md-4 features-box-part">
                <div className="as-service-box ">
                  <div class="MuiCardMedia-root css-1ey63fk-MuiCardMedia-root-Card-cardMedia">
                    <img
                      src="https://images.ctfassets.net/x3hoqyjm3c27/6Rdkb4vVtTVfD33ZXm3Nt9/021fb573648258b6931c6dee33edcd0f/arc-spread.svg"
                      class="css-182ql0r-Media-root"
                    />
                  </div>
                  <i className="iconfadde iconfadde1">
                    {' '}
                    {/* <FontAwesomeIcon icon={faMoneyBill} /> */}
                    <FaCrown></FaCrown>
                  </i>
                  <h3 className="mt-3  ml-5">
                    <h2 className="heading">Premium domain names</h2>
                  </h3>
                  <p className="paragraph-whatoffers">
                    {' '}
                    Premium domain names are usually short, easy to brand, and
                    use a popular extension like .com.{' '}
                  </p>{' '}
                  <Link to="/Solutions">
                    <a class="mt-3 text-[#0abcc2] underline font-semibold cursor-pointer inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features

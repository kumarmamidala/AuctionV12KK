import React from "react";
import { Link } from "react-router-dom";
import "./SellIntro.css";

import { SiMarketo } from "react-icons/si";
import { GoBroadcast } from "react-icons/go";
import { MdVisibility } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";

function SellIntro() {
  return (
    <div>
      <section className="home_fourth_section">
        <div className="home_fourth-section-Box-1 shadow-lg">
          <div className="Home_part-1">
            <div>
              <p class="heading !text-primary">The best possible price.</p>
              <p class="paragraph-list">
                By using our services you can sell your domain quickly at the
                right price while taking advantage of particularly low selling
                fees.
              </p>
              <Link to="/PostaBid">
                <button class="mt-4 red-btn">Start Now</button>
              </Link>
            </div>
          </div>
          <div className="Home_part-2">
            {/* <div>
              <p class="heading !text-black">
                <span className="!text-[#25cbd3]">More visibility</span> for
                your domain on our marketplace
              </p>
            </div> */}
            <div>
              <div class="mt-3 flex flex-row md:mr-2 sell-hero-box">
                <div>
                  <SiMarketo className="text-primary sell-hero-box-icon" />
                  <div className="flex justify-between">
                    <h2 class="heading  text-[22px]">Market Positioning</h2>
                  </div>
                  <p class="paragraph ">
                    We Ensure that your domain gets a top position on our
                    marketplace
                  </p>
                </div>
              </div>

              <div class="mt-3 flex flex-row sell-hero-box">
                <div>
                  <GoBroadcast className="text-primary sell-hero-box-icon " />
                  <div className="flex justify-between">
                    <h2 class="heading  text-[22px]">Broad Exposure</h2>
                  </div>
                  <p class="paragraph ">
                    You can reach more than 10,000 potential buyers every day
                  </p>
                </div>
              </div>

              <div class="mt-3 flex flex-row md:mr-2 sell-hero-box">
                <div>
                  <MdVisibility className="text-primary sell-hero-box-icon " />
                  <div className="flex justify-between">
                    <h2 class="heading  text-[22px]">
                      Time-Limited Visibility
                    </h2>
                  </div>
                  <p class="paragraph">
                    Runtime: 30 days. Ends automatically. The best way to reach
                    potential buyers
                  </p>
                </div>
              </div>

              <div class="mt-3 flex flex-row sell-hero-box">
                <div>
                  <RiPagesFill className="text-primary sell-hero-box-icon " />
                  <div className="flex justify-between">
                    <h2 class="heading  text-[22px]">Homepage Spotlight</h2>
                  </div>
                  <p class="paragraph ">
                    Your domain will appear on the Domohost homepage and as a
                    top hit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SellIntro;

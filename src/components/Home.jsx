import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import { FcIphone } from "react-icons/fc";
import {BiFirstAid} from "react-icons/bi"
import { TbFreeRights } from "react-icons/tb";
import {RiSendPlaneFill} from "react-icons/ri"
import { CgSmileMouthOpen } from "react-icons/cg";
import imagee from "../imgs/localisation.svg";
import imagee2 from "../imgs/sms-svgrepo-com.svg";
import imagee3 from "../imgs/medals-reward-price-svgrepo-com.svg";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-Header">
        <Header />
        <div className="Home-Header-content2">
          <div className="Home-Header-content2-H-Div">
            <h2>
              Welcome to{" "}
              <span style={{ color: "rgb(216, 44, 44)" }}> TOGETHER</span> , We
              wish you from our hearts a Good Day.
            </h2>
            <h2 className="Home-Header-content2-H2">
              Let’s start and save our lives.
            </h2>
          </div>
          <Link
            activeClass="active"
            to="Home-Body"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            {" "}
            <button className="Home-Header-content2-btn">Get Started</button>
          </Link>
        </div>
      </div>
      <div className="Home-Body">
        <div className="Home-Body-Section1">
          <div className="Home-Body-Section1-H-1">
            <h2 className="Home-Body-Section1-H2">
              Our Mission is Saving Lives
            </h2>
            <h4 className="Home-Body-Section1-H4">
              Find blood donors near your location and make a blood request in
              less than 10 minutes.
            </h4>
          </div>
          <div className="Home-Body-List1">
            <div className="Home-Body-iconsDiv">
              <div className="hover-line"></div>
              <div className="Home-Body-logo">
                <BiFirstAid style={{ color: "red" }} />
              </div>
              <div className="Home-Body-Logos-p">
                Find blood donors who are near to your location and request the
                needed blood type.
              </div>
            </div>
            <div className="Home-Body-iconsDiv">
             <div className="hover-line"></div>
              <div className="Home-Body-logo">
                <FcIphone />
              </div>
              <div className="Home-Body-Logos-p">
                Get notified about requests or updates instantly by SMS.
              </div>
            </div>
            <div className="Home-Body-iconsDiv">
              <div className="hover-line"></div>
              <div className="Home-Body-logo">
                <TbFreeRights style={{ color: "green" }} />
              </div>
              <div className="Home-Body-Logos-p">
                You don't have to pay anything, you will help in saving peoples
                live for Free <CgSmileMouthOpen />
              </div>
            </div>
          </div>
        </div>

        
          <div className="Home-Body-H-2">
            <h2 className="Home-Body-Section1-H2">Join Us</h2>
            <h4 className="Home-Body-Section2-H4">
              Join our community and help us save peoples lives.That would be
              nice of you and respectful for that..
            </h4>
            <div className="Home-Body-input">
              <input className="newsletter__contact__input" type="email" name="email" id="email" placeholder="example@gmail.com"/>
              <RiSendPlaneFill className="input-icon"/>

            </div>
          </div>

        
        <div className="Home-Body-Section2">
          <div className="Home-Body-List2">
            <div className="Home-Body-iconsDiv2">
              <div className="Home-Body-List2-H">
                "Find Donors next to your Area or find hospitals next to you by
                <span style={{ color: "rgb(214, 14, 81)" }}>"Google Maps"</span>{" "}
                so you can donat your blood easlier and faster ."
              </div>
              <img src={imagee} alt="map" className="Home-Body-mapsvg" />
            </div>

            <div className="Home-Body-iconsDiv2">
              <div className="Home-Body-List2-H">
                "As soon as a new blood request is raised, it is <span style={{color:"green"}}> routed </span> among
                our local volunteer blood donors . We will keep you <span style={{color:"red"}}>updated </span>  with
                real-time notifications sent directly to you via SMS text
                message"{" "}
              </div>
              <img src={imagee2} alt="map" className="Home-Body-mapsvg" />
            </div>

            <div className="Home-Body-iconsDiv2">
              <div className="Home-Body-List2-H">
                "In as little as few minutes, you can become someone's unnamed,
                unknown, but all-important <span style={{color:"orangered"}}> Hero </span>. Saving a life is a <span style={{color:"green"}}> noble </span> work
                that starts very simply and easily. Donate Blood or donate
                Money, every form of contribution you make is important, valued
                and essential in our shared mission to save lives."
              </div>
              <img src={imagee3} alt="map" className="Home-Body-mapsvg" />
            </div>
          </div>
        </div>
        <br />
      </div>

      <div className="Home-PreFooter">
        <div className="Home-PreFooter-H">
          Let’s start and Become one of us{" "}
        </div>
        <div>
          <button
            className="Home-PreFooter-Btn"
            onClick={() => {
              window.location.pathname = "/Sign Up";
            }}
          >
            {" "}
            Register{" "}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

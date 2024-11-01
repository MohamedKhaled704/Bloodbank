import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SubHeader from "./SubHeader";
import svg1 from "../imgs/question-answer-help-svgrepo-com.svg";
import svg2 from "../imgs/creativity-think-svgrepo-com.svg";
import svg3 from "../imgs/connection-internet-network-online-shop-shopping-svgrepo-com.svg";
import svg4 from "../imgs/notification-svgrepo-com.svg";
import svg5 from "../imgs/free-price-tag-svgrepo-com.svg";
import svg6 from "../imgs/blood-donation-svgrepo-com.svg";

function AboutUs() {
  return (
    <div>
      <Header />
      <SubHeader
        title="About Us"
        desc="What we do at Save Life Foundation, Inc"
      />
      <div className="AboutUs_div">
        <section className="AboutUs_Section1">
          <div>
            <h2 className="AboutUs_Section1_H2">
              What is the purpose of this?
            </h2>
          </div>
          <div>
            <p className="AboutUs_Section1_P">
              By bringing together blood donors and those in need of blood, we
              are able to address the issue of blood emergencies.
            </p>
          </div>
        </section>
        <section className="AboutUs_Section2">
          <div className="AboutUs_Section2_Div1">
            <div className="AboutUs_Section2_6Divs">
              <img className="AboutUs_Section2_svg" src={svg1} alt="svg" />
              <h1>What we do</h1>
              <p className="AboutUs_Section2_Div2_P">
                Without the need of an intermediary like blood banks, we match
                blood donors with recipients for a quick and easy process.
              </p>
            </div>
            <div className="AboutUs_Section2_6Divs">
              <img className="AboutUs_Section2_svg" src={svg2} alt="svg" />
              <h1>Creative</h1>
              <p className="AboutUs_Section2_Div2_P">
                The innovative strategy used by " TOGETHER " to address global
                health . Blood donors have instant access to us .{" "}
              </p>
            </div>
            <div className="AboutUs_Section2_6Divs">
              <img className="AboutUs_Section2_svg" src={svg3} alt="svg" />
              <h1>Connection</h1>
              <p className="AboutUs_Section2_Div2_P">
                As part of a network of neighborhood organizations that
                effectively responds to emergencies, Savelife is one of them.
              </p>
            </div>
          </div>
          <div className="AboutUs_Section2_Div2">
            <div className="AboutUs_Section2_6Divs">
              <img className="AboutUs_Section2_svg" src={svg6} alt="svg" />
              <h1>Saving Lives</h1>
              <p className="AboutUs_Section2_Div2_P">
                We are a nonprofit organization, and our main goal is to make
                sure that all precautions are taken to protect the weak. Make a
                donation to aid us!
              </p>
            </div>
            <div className="AboutUs_Section2_6Divs">
              <img className="AboutUs_Section2_svg" src={svg5} alt="svg" />
              <h1>100% Free</h1>
              <p className="AboutUs_Section2_Div2_P">
                The main objective of TOGETHER is to offer a free, simple,
                quick, efficient, and dependable way to obtain life-saving
                blood.
              </p>
            </div>
            <div className="AboutUs_Section2_6Divs">
              <img className="AboutUs_Section2_svg" src={svg4} alt="svg" />
              <h1>Get Notified</h1>
              <p className="AboutUs_Section2_Div2_P">
                Through an automated SMS service, TOGETHER collaborates with
                network partners to connect blood donors and recipients.
              </p>
            </div>
          </div>
        </section>
        <section className="AboutUs_Section3">
          <div>
            <h2 className="AboutUs_Section1_H2">How to use our service</h2>
            <p className="AboutUs_Section1_P">
              using our service is very simple and so easy
            </p>
          </div>
          <div className="AboutUs_Section3_Div2">
            <div className="AboutUs_Section3_Div2_Div3">
              <h2 className="AboutUs_Section3_Div2_Divs_H2">1.</h2>
              <p className="AboutUs_Section3_Div2_Divs_P">
                Register your account so you can instantly start using <span style={{ color: "red" }}> "TOGETHER"</span>
              </p>
            </div>
            <div className="AboutUs_Section3_Div2_Div3">
              <h2 className="AboutUs_Section3_Div2_Divs_H2">2.</h2>
              <p className="AboutUs_Section3_Div2_Divs_P">
                <span style={{ color: "green" }}>Post</span> a blood request and
                locate volunteers within your area.
              </p>
            </div>
            <div className="AboutUs_Section3_Div2_Div3">
              <h2 className="AboutUs_Section3_Div2_Divs_H2">3.</h2>
              <p className="AboutUs_Section3_Div2_Divs_P">
                Get real-time
                <span style={{ color: "blueviolet" }}> notifications</span> when
                a donor has been located and when the patient's blood is being
                delivered.
              </p>
            </div>
          </div>
        </section>
        <section className="AboutUs_Section4">
          <div>
            <h2 className="AboutUs_Section1_H2">Contact Us</h2>
            <p className="AboutUs_Section1_P">
              Use the form below to contact us if you need assistance or simply
              have a question for us.
            </p>
          </div>
          <form className="AboutUs_Form">
            <div className="AboutUs_Form_Div1">
              <input
                className="AboutUs_Form_Div1_inputs"
                type="text"
                placeholder="Full Name *"
              />
              <input
                className="AboutUs_Form_Div1_inputs"
                type="number"
                placeholder="Phone Number *"
              />
              <input
                className="AboutUs_Form_Div1_inputs"
                type="email"
                placeholder="Email *"
              />
            </div>
            <div>
              <textarea
                className="AboutUs_Form_Textarea"
                placeholder="Type... "
              ></textarea>
            </div>
            <div>
              <button className="AboutUs_Form_btn" onClick={""}>
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;

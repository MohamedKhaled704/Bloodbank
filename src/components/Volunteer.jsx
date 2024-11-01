import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SubHeader from "./SubHeader";
import VolunteersLi from "./VolunteersLi";
import VolunteersTable from "./VolunteersTable";
import image6 from "../imgs/care-day-health-svgrepo-com.svg";
import image7 from "../imgs/woman-superhero-svgrepo-com.svg";

function Volunteer() {
  return (
    <div>
      <Header />
      <SubHeader title="Volunteers" desc="Search our Super Hero Volunteers" />
      <div className="Volunteer-div">
        <table className="VolunteersTablee">
          <thead>
            <tr className="SignUp-Table-tr">
              <td style={{ width: "25%" }}>
                <span>Profile</span>
              </td>
              <td
                style={{
                  width: "50%",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Address
              </td>
              <td style={{ width: "25%" }}>BloodType</td>
            </tr>
          </thead>

          {VolunteersLi.map((link) => {
            return (
              <VolunteersTable
                Profile={link.Profile}
                Address={link.Address}
                BloodType={link.BloodType}
                img={link.img}
                id={link.id}
              />
            );
          })}
        </table>
      </div>
      <section className="Volunteers_Section">
        <div>
          <img className="Volunteers_Section_SVG" src={image6} alt="Heart in hands" />
        </div>
        <div>
          <div style={{display:'flex',flexDirection:'row'}}>
          <img style={{  height: '60px', width: '40px'}} src={image7} alt="Hero" />
          <h3 className="Volunteers_Section_H3">Volunteers are the real heroes</h3>
          </div>
          <p className="Volunteers_Section_P">
            We depend on volunteers! Volunteers make up more than <span style={{color:'green'}}> 90% </span>of our total
            workforce and carry on our humanitarian work.Our volunteers are available <span style={{fontWeight:'bold'}}> 24 hour per a day </span>  to give help
            and donate blood.
            Blood banks store blood bags but our volunteers are there with you
            in an emergency for a blood transfusion real time. Donating blood 
            can be intimidating and even scary for many people. Time
            to put those hesitations and fears aside. Learn from <span style={{color:'red'}}>Us </span>
            Connect blood and platelet donors how simple and easy it is to roll
            up a sleeve and help save lives.
          </p>

        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Volunteer;

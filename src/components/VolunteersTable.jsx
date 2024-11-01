import React from "react";

function VolunteersTable({ Profile, Address, BloodType, img, id }) {
  return (
    <>
      <tbody>
        <tr className="SignUp-Table-tr" key={id}>
          <td style={{ width: "25%" }}>
            <img src={img} alt={id} className="Volunteerimg" />
            <span>{Profile}</span>
          </td>
          <td style={{ width: "50%" }}>{Address}</td>
          <td style={{ width: "25%" }}>{BloodType}</td>
        </tr>
      </tbody>
    </>
  );
}

export default VolunteersTable;

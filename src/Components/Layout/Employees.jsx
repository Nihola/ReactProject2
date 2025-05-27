// Employees.js
import React from "react";
import avatar1 from "./images/avatar1.png";
import avatar2 from "./images/avatar2.png";
import SimpleSlider from "../Sector/SimpleSlider";

const Employees = () => {
  const employees = [
    {
      img: avatar1,
      text:
        "You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.",
      rating: 4,
      name: "Augusta W. Reynoso",
      profession: "UI&UX DESIGNER"
    },
    {
      img: avatar2,
      text:
        "You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.",
      rating: 3,
      name: "John S. Smith",
      profession: "FRONTEND DEVELOPER"
    }
  ];

  return (
    <section id="content">
      <SimpleSlider
        employees={employees}
        title="OUR TEAM"
        heading="Meet Our Creative Minds"
        description="You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your."
      />
    </section>
  );
};

export default Employees;

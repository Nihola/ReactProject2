import React from 'react'
import Slider from "react-slick";
import avatar1 from './images/avatar1.png';
import avatar2 from './images/avatar2.png';
const Employees = () => {
  const employees = [
    { img: avatar1, text: 'You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.', rating: 4, icon: <FaPlus />, name: 'Augusta W. Reynoso', profession: 'UI&UX DeSIGNER' },
    { img: avatar2, text: 'You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.', rating: 3, icon: <FaPlus />, name: 'John S. Smith', profession: 'FRONTEND DEVELOPER' }
  ];
  return (
     
      <section id="content">
        <Sector employees={employees} />
      </section>
     
  )
}

export default Employees

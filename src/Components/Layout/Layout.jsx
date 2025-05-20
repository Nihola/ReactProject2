import React from 'react';
import Wrapper from '../Wrapper/Wrapper';               
import { FaPlus } from 'react-icons/fa';

import turkey from './images/turkey.png';
import salad from './images/salad.png';
import burger from './images/burger.png';
import grechkali from './images/grechkali.png';
import masala from './images/masala.png';
import shakarob from './images/shakarob.png';

const meals = [
    { img: turkey, title: 'Vegie Muffen', price: '16$', text: 'There are many things are needed to start the Fast Food Business.', rating: 4, icon: <FaPlus /> },
    { img: salad, title: 'Vegie Muffen', price: '18$', text: 'There are many things are needed to start the Fast Food Business..', rating: 5, icon: <FaPlus /> },
    { img: burger, title: 'Burger Blast', price: '12$', text: 'There are many things are needed to start the Fast Food Business.', rating: 3, icon: <FaPlus /> },
    { img: shakarob, title: 'Shakarob Special', price: '10$', text: 'There are many things are needed to start the Fast Food Business.', rating: 2, icon: <FaPlus /> },
    { img: masala, title: 'Masala Magic', price: '14$', text: 'There are many things are needed to start the Fast Food Business.', rating: 4, icon: <FaPlus /> },
    { img: grechkali, title: 'Grechkali Goodness', price: '19$', text: 'There are many things are needed to start the Fast Food Business.', rating: 3, icon: <FaPlus /> }
];

const Layout = () => (
    <section id="one">
        <Wrapper meals={meals} />           
    </section>
);

export default Layout;

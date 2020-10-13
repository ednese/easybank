import React from 'react';
import Burger from './burger/burger';

import './header.css'

import logo from '../../assets/icons/logo.svg'

function Header() {
  const tab = ["Home", "About", "Contact", "Blog", "Careers"]
  return (
    <div className="Header">
        <img className="header__logo" src={logo} alt="logo"></img>
        <ul className="header__navbar">
          {tab.map((item, index) => <li key={index} ><a href="/#">{item}</a></li>)}
        </ul>
        <button className="header__button">Request Invite</button>
        {Burger(tab)}
    </div>
  );
}
export default Header;

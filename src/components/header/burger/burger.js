import React, {useState} from 'react';

import './burger.css'

function Burger(tab) {
  const [active, setActive] = useState(false);
  const [slide, setSlide] = useState('burger__sidebar');
  const toggle = () => {
    setActive(!active);
    toggleSlide()
  };
  const toggleSlide = () => {
      if (!active === true)
        setSlide('burger__sidebar open')
      else if (!active === false)
        setSlide('burger__sidebar close')
  }
  return (
    <div className="Burger">
        <div className={active? 'burger__icon active' : 'burger__icon'} onClick={toggle}>
            <span/>
        </div>
        <div className="burger__anim">
          <div className={slide}>
              <ul className="burger__sidebar__items">
                  {tab.map((item, index) => <li key={index} ><a href="/#">{item}</a></li>)}
              </ul>
          </div>
        </div>
        
    </div>
  );
}
export default Burger;

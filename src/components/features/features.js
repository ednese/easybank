import React from 'react';

import './features.css'

import api from '../../assets/icons/icon-api.svg'
import budgeting from '../../assets/icons/icon-budgeting.svg'
import onboarding from '../../assets/icons/icon-onboarding.svg'
import banking from '../../assets/icons/icon-online.svg'


function Features() {
  const tab = [{title: "Online Banking", src: banking, txt: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."},
  {title: "Simple Budgeting", src: budgeting, txt: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."},
  {title: "Fast Onboarding", src: onboarding, txt: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."},
  {title: "Open API", src: api, txt: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."}]
  const feature = tab.map((item, index) => 
    <div key={index} className="feature">
      <img src={item.src} className="feature__icon" alt="feature__icon"/>
      <h1 className="feature__title">{item.title}</h1>
      <p className="feature__paragraph">{item.txt}</p>
    </div>)
  return (
    <div className="Features">
        <div className="features__inner">
            <div className="features__top">
                <h1 className="features__top__title">Why choose Easybank?</h1>
                <p className="features__top__text">We leverage Open Banking to turn
                your bank account into your financial hub.
                Control your finances like never before.</p>
            </div>
            <div className="feature__box">
                {feature}
            </div>
        </div>
    </div>
  );
}
export default Features;

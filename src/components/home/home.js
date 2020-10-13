import React from 'react';

import './home.css'

import phones from '../../assets/images/image-mockups.png'

function Home() {
  return (
    <div className="Home">
        <div className="home__inner">
            <div className="home__left">
                <h1 className="home__left__title">Next generation digital banking</h1>
                <p className="home__left__text">Take your financial life online.
                Your Easybank account will be a one-stop-shop for spending, saving,
                budgeting, investing, and much more.</p>
                <button className="home__left__btn">Request Invite</button>
            </div>
            <img className="home__phones" src={phones} alt="phones"/>
        </div>
    </div>
  );
}
export default Home;

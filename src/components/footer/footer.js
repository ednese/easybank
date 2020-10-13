import React from 'react';

import './footer.css'

import logo from '../../assets/icons/logo-white.svg'

import youtube from '../../assets/icons/icon-youtube.svg'
import twitter from '../../assets/icons/icon-twitter.svg'
import instagram from '../../assets/icons/icon-instagram.svg'
import pinterest from '../../assets/icons/icon-pinterest.svg'
import facebook from '../../assets/icons/icon-facebook.svg'


function Footer() {
//   const tab = [{title: "Receive money in any currency with no fees", author: "By Claire Robinson", src: money, txt: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"},
//   {title: "Treat yourself without worrying about money", author: "By Wilson Hutton", src: restaurant, txt: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"},
//   {title: "Take your Easybank card wherever you go", author: "By Wilson Hutton", src: plane, txt: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"},
//   {title: "Our invite-only Beta accounts are now live!", author: "By Claire Robinson", src: confetti, txt: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."}]
//   const article = tab.map(item => 
//     <div className="article">
//       <img src={item.src} className="article__image" alt="article__image"/>
//       <div className="article__txt">
//         <h2 className="article__txt__author">{item.author}</h2>
//         <h1 className="article__txt__title">{item.title}</h1>
//         <p className="article__txt__paragraph">{item.txt}</p>
//       </div>
//     </div>)
  return (
    <div className="Footer">
        <div className="footer__inner">
            <div className="footer__top">
                <img className="footer__top__logo" src={logo} alt="logo"/>
                <div className="footer__top__social">
                    <img className="facebook" src={facebook} alt="facebook"/>
                    <img className="youtube" src={youtube} alt="youtube"/>
                    <img className="twitter" src={twitter} alt="twitter"/>
                    <img className="pinterest" src={pinterest} alt="pinterest"/>
                    <img className="instagram" src={instagram} alt="instagram"/>
                </div>
            </div>
            <div className="footer__middle">
                <ul className="footer__middle_left">
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Support</li>
                </ul>
                <ul className="footer__middle_right">
                    <li>Contact</li>
                    <li>Careers</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer__bottom">
                <button className="footer__bottom__btn">Request Invite</button>
                <p className="copyright">© Easybank. All Rights Reserved.</p>
                <p className="challenge">Challenge by <a href="https://www.frontendmentor.io/" className="link">Frontend Mentor</a> Coded by <a href="https://github.com//ednese" className="link">ednese</a>.</p>
            </div>
        </div>
    </div>
  );
}
export default Footer;

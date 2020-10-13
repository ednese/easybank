import React from 'react';

import './articles.css'

import confetti from '../../assets/images/image-confetti.jpg'
import money from '../../assets/images/image-currency.jpg'
import plane from '../../assets/images/image-plane.jpg'
import restaurant from '../../assets/images/image-restaurant.jpg'


function Articles() {
  const tab = [{title: "Receive money in any currency with no fees", author: "By Claire Robinson", src: money, txt: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"},
  {title: "Treat yourself without worrying about money", author: "By Wilson Hutton", src: restaurant, txt: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"},
  {title: "Take your Easybank card wherever you go", author: "By Wilson Hutton", src: plane, txt: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"},
  {title: "Our invite-only Beta accounts are now live!", author: "By Claire Robinson", src: confetti, txt: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."}]
  const article = tab.map((item, index) => 
    <div key={index} className="article">
      <img src={item.src} className="article__image" alt="article__image"/>
      <div key={index+10} className="article__txt">
        <h2 className="article__txt__author">{item.author}</h2>
        <h1 className="article__txt__title">{item.title}</h1>
        <p className="article__txt__paragraph">{item.txt}</p>
      </div>
    </div>)
  return (
    <div className="Articles">
        <div className="articles__inner">
            <h1 className="articles__inner__title">Latest Articles</h1>
            <div className="articles__inner__box">
                {article}
            </div>
        </div>
    </div>
  );
}
export default Articles;

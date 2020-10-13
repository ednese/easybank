import React from 'react';
import Header from './components/header/header'
import Home from './components/home/home'
import Features from './components/features/features'
import Articles from './components/articles/articles'
import Footer from './components/footer/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Features/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;

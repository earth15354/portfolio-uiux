import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';

function Home() {
  
  return (
    <div className='app'>
      <Navbar />
      <MainContent />
    </div>
  );
}

export default Home;

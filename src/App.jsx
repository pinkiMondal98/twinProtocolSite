import { useState } from 'react'
import './App.css';
import NavBar from './NavBar';
import MyCarousel from './MyCarousel';
import GridComponent from './GridComponent';
import DescComponent from './DescComponent';

function App() {
  return (
    <div className="row justify-content-center m-2">
      <div>
        <NavBar companyName="nickBLACK" />
      </div>
      <div className="row justify-content-center m-4">
        <MyCarousel />
        <DescComponent />
        <GridComponent />
      </div>
    </div>
  );
}

export default App;

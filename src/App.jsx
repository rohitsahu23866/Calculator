// src/App.jsx

import React from 'react';
import Calculator from './components/Calculator.jsx';
import Footer from './components/Footer.jsx';
import { TypeAnimation } from 'react-type-animation';

const App = () => {
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <header className="App-header mb-6">
        <h1 className="mt-10 text-4xl font-bold primary-color sm:text-5xl md:text-6xl">
          <TypeAnimation sequence={["Calculator",5000,"",1000]} wrapper='span' speed={50} repeat={Infinity}
          />
          </h1>
      </header>
      <Calculator />
      <Footer />
    </div>
  );
};

export default App;

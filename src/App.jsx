// src/App.jsx

import React from 'react';
import Calculator from './components/Calculator.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4">
      <header className="App-header mb-6">
        <h1 className="mt-10 text-4xl font-bold text-white sm:text-5xl md:text-6xl">Calculator</h1>
      </header>
      <Calculator />
      <Footer />
    </div>
  );
};

export default App;

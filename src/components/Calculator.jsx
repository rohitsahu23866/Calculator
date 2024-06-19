// src/components/Calculator.jsx

import React, { useState } from 'react';
import Display from './Display.jsx';
import Button from './Button.jsx';

const Calculator = () => {
  const [input, setInput] = useState('');
  const buttons = [
    ['(', ')', '.', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', 'C', '←', '='] 
  ];

  const handleButtonClick = (label) => {
    if (label === 'C') {
      setInput('');
    } else if (label === '←') {
      setInput(input.slice(0, -1));
    } else if (label === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + label);
    }
  };

  return (
    <div className="max-w-xs mx-auto mt-10 p-4 bg-gray-800 rounded-lg">
      <Display value={input} />
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-between">
          {row.map((button, buttonIndex) => (
            <Button
              key={buttonIndex}
              label={button}
              onClick={handleButtonClick}
              className={button === '0' ? 'flex-grow-2' : ''}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calculator;
// src/components/Button.jsx

import React from 'react';

const Button = ({ label, onClick, className }) => {
  const getButtonStyle = (label) => {
    if (label === 'C' || label === '←') {
      return 'bg-gray-500 text-white';
    }
    if (['/', '*', '-', '+', '='].includes(label)) {
      return 'bg-orange-500 text-white';
    }
    return 'bg-gray-200 text-black';
  };

  return (
    <button
      className={`font-bold py-4 text-xl rounded-full m-1 ${getButtonStyle(label)} ${className}`}
      onClick={() => onClick(label)}
      style={{ width: '70px', height: '70px' }}
    >
      {label}
    </button>
  );
};

export default Button;

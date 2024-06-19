// src/components/Display.jsx

import React from 'react';

const Display = ({ value }) => {
  return (
    <div className="bg-black text-white text-right p-4 text-4xl rounded mb-4 h-20 flex items-center justify-end overflow-hidden">
      <span className="block truncate">
        {value}
      </span>
    </div>
  );
};

export default Display;

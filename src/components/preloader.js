import React from 'react';
import { BarLoader } from 'react-spinners';

const Preloader = (props) => {
  return (
    <div className="preloader">
      <BarLoader
        color="#1ba0cd"
        height={2}
        width={150}
      />
    </div>
  );
};

export default Preloader;
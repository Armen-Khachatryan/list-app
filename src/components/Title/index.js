import React from 'react';
import './styles.css';

const Titles = () => {
  return (
    <>
      <div className='title-container'>
        <div>
          <h3>PROS</h3>
        </div>
        <div style={{ width: 1, backgroundColor: 'gray' }}></div>
        <div>
          <h3>CONS</h3>
        </div>
      </div>
      <div style={{ height: 1, backgroundColor: 'gray' }}></div>
    </>
  );
};

export default Titles;

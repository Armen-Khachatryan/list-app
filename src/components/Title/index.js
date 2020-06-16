import React from 'react';
import './styles.css';

const Titles = () => {
  return (
    <>
      <div className='title-container'>
        <div>
          <h3>PROS</h3>
        </div>
        <div className='vertical-line'></div>
        <div>
          <h3>CONS</h3>
        </div>
      </div>
      <div className='horizontal-line'></div>
    </>
  );
};

export default Titles;

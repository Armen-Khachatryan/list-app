import React from 'react';
import Header from '../Header';
import './styles.css';
import Titles from '../Title';
import InputList from '../InputList';

const App = () => {
  return (
    <>
      <div className='app'>
        <Header />
        <Titles />
        <InputList />
      </div>
    </>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import Header from '../Header';
import './styles.css';
import Titles from '../Title';
import InputList from '../InputList';
import store from '../../redux/store';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div className='app'>
          <Header />
          <Titles />
          <InputList />
        </div>
      </DndProvider>
    </Provider>
  );
};

export default App;

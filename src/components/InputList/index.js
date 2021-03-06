import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { connect } from 'react-redux';
import {
  addItemToPros,
  removeItemFromPros,
  addItemToCons,
  removeItemFromCons
} from '../../redux/actions/';
import DraggableInput from '../DraggableInput';
import './styles.css';

const mapStateToProps = state => {
  return {
    prosList: state.prosList,
    consList: state.consList
  };
};

const mapDispatchToProps = {
  addItemToPros,
  removeItemFromPros,
  addItemToCons,
  removeItemFromCons
};

const InputList = props => {
  const [, setState] = useState({});

  const [, drop] = useDrop({
    accept: 'input'
  });

  const handleProsListChange = (event, index) => {
    event.preventDefault();
    let prosList = props.prosList;
    prosList[index].id = index + 1;
    prosList[index].value = event.target.value;

    setState({}); // as the app is written without using redux-forms this is required to re-render the component!
  };

  const handleConsListChange = (event, index) => {
    event.preventDefault();
    let consList = props.consList;
    consList[index].id = index + 1;
    consList[index].value = event.target.value;

    setState({});
  };

  return (
    <div ref={drop}>
      <div className='flex-container'>
        <ol>
          {props.prosList.map((item, index) => {
            return (
              <li key={index}>
                <DraggableInput
                  value={item.value}
                  onChange={event => {
                    handleProsListChange(event, index);
                    if (item.id === props.prosList.length && item.value) {
                      props.addItemToPros({ id: index + 1, value: '' });
                    }
                    if (!item.value) {
                      props.removeItemFromPros({ id: index });
                    }
                  }}
                  onEndDrag={() => {
                    let prosList = props.prosList;
                    let consList = props.consList;
                    for (let key in consList) {
                      if (!consList[key].value) {
                        consList.pop();
                      }
                    }
                    props.addItemToCons(item);
                    props.addItemToCons({ id: item.id + 1, value: '' });
                    if (prosList.length !== 1) {
                      prosList.splice(index, 1);
                      props.removeItemFromPros({ id: index });
                    }
                  }}
                />
              </li>
            );
          })}
        </ol>

        <div className='vertical-line' />

        <ol>
          {props.consList.map((item, index) => {
            return (
              <li key={index}>
                <DraggableInput
                  value={item.value}
                  onChange={event => {
                    handleConsListChange(event, index);
                    if (item.id === props.consList.length && item.value) {
                      props.addItemToCons({ id: index + 1, value: '' });
                    }
                    if (!item.value) {
                      props.removeItemFromCons({ id: index });
                    }
                  }}
                  onEndDrag={() => {
                    let prosList = props.prosList;
                    let consList = props.consList;
                    for (let key in prosList) {
                      if (!prosList[key].value) {
                        prosList.pop();
                      }
                    }
                    props.addItemToPros(item);
                    props.addItemToPros({ id: item.id + 1, value: '' });
                    if (consList.length !== 1) {
                      consList.splice(index, 1);
                      props.removeItemFromCons({ id: index });
                    }
                  }}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(InputList);

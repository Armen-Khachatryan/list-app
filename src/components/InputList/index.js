import React, { useState, useEffect } from 'react';
import { DndProvider, useDrop } from 'react-dnd';
// import {} from 'redux'
import { connect } from 'react-redux';
import { addInputField, removeInputField } from '../../redux/actions/';
import DraggableInput from '../DragAndDrop';
import { ItemTypes } from '../Constants';
import './styles.css';

function mapStateToProps(state) {
  return {
    prosList: state.prosList,
    consList: state.consList
  };
}

const mapDispatchToProps = {
  addInputField,
  removeInputField
};

const InputList = props => {
  const [state, setState] = useState({
    prosList: [{ id: 1, value: '' }],
    consList: [{ id: 1, value: '' }]
  });

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.INPUT
  });

  const handleProsListChange = (event, index) => {
    event.preventDefault();
    let prosList = props.prosList;
    prosList[index].id = index + 1;
    prosList[index].value = event.target.value;

    console.log('hqiudhuhuhhhh', prosList[index].value);

    // setState(prevState => ({ ...prevState, prosList }));
    props.addInputField({ ...(index + 1), ...event.target.value });
  };

  const handleConsListChange = (event, index) => {
    event.preventDefault();
    let consList = props.consList;
    consList[index].id = index + 1;
    consList[index].value = event.target.value;

    setState(prevState => ({ ...prevState, consList }));
  };

  const dragProsListItem = (item, index) => {
    let prosList = props.prosList;
    let consList = props.consList;
    for (let key in consList) {
      if (!consList[key].value) {
        consList.pop();
      }
    }
    consList.push(item);
    consList.push({ id: item.id + 1, value: '' });
    if (prosList.length !== 1) {
      prosList.splice(index, 1);
      setState(prevState => ({
        ...prevState,
        prosList,
        consList
      }));
    }
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
                    let prosList = props.prosList;
                    if (item.id === props.prosList.length && item.value) {
                      prosList.push({ id: item.id + 1, value: '' });
                      // props.addInputField(item.id + 1, event.target.value);
                    }
                    if (!item.value) {
                      // prosList.splice(index, 1);
                      props.removeInputField({
                        ...index,
                        ...event.target.value
                      });
                    }
                  }}
                  onEndDrag={() => {
                    dragProsListItem(item, index);
                  }}
                />
              </li>
            );
          })}
        </ol>
        {/* 
        <div className='vertical-line' />

        <ol>
          {state.consList.map((item, index) => {
            return (
              <li key={index}>
                <DraggableInput
                  onChange={event => {
                    handleConsListChange(event, index);
                    let consList = state.consList;
                    if (item.id === state.consList.length && item.value) {
                      consList.push({ id: item.id + 1, value: '' });
                      setState(prevState => ({ ...prevState, consList }));
                    }
                    if (!item.value) {
                      consList.splice(index, 1);
                      setState(prevState => ({ ...prevState, consList }));
                    }
                  }}
                  onEndDrag={() => {
                    let prosList = state.prosList;
                    let consList = state.consList;
                    for (let key in prosList) {
                      if (!prosList[key].value) {
                        prosList.pop();
                      }
                    }
                    prosList.push(item);
                    prosList.push({ id: item.id + 1, value: '' });
                    if (consList.length !== 1) {
                      consList.splice(index, 1);
                      setState(prevState => ({
                        ...prevState,
                        consList,
                        prosList
                      }));
                    }
                  }}
                  value={item.value}
                />
              </li>
            );
          })}
        </ol> */}
      </div>
      {/* {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow'
          }}
        />
      )} */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(InputList);

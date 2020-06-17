import React from 'react';
import { ItemTypes } from './Constants';
import { useDrag } from 'react-dnd';

const Item = props => {
  const [{ isDragging }, drag] = useDrag({
    item: { name: props.value, type: ItemTypes.INPUT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    }),
    end: () => {
      props.onEndDrag();
    }
  });

  return (
    <input
      ref={drag}
      //   style={{
      //     opacity: isDragging ? 0.5 : 1,
      //     fontSize: 25,
      //     fontWeight: 'bold',
      //     cursor: 'move'
      //   }}
      onChange={props.onChange}
      value={props.value}
    ></input>
  );
};

export default Item;

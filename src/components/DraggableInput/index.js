import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableInput = props => {
  const [{ isDragging }, drag] = useDrag({
    item: { name: props.value, type: 'input' },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    }),
    end: () => {
      props.onEndDrag();
    }
  });

  return (
    <input ref={drag} onChange={props.onChange} value={props.value}></input>
  );
};

export default DraggableInput;

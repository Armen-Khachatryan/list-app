const consListreducer = (consList = [{ id: 1, value: '' }], action) => {
  console.log(action);
  if (action.type === 'ADD_ITEM_TO_CONS') {
    if (action.payload.id === consList.length && action.payload.value) {
      return [...consList, action.payload];
    }
  } else if (action.type === 'REMOVE_ITEM_FROM_CONS') {
    console.log(action.payload.id, consList.le);
    if (!action.payload.value && action.payload.id !== consList.length) {
      consList = consList.filter(element => element.value !== '');
      return [...consList, { id: action.payload.id + 1, value: '' }];
    }
  }
  return consList;
};

export default consListreducer;

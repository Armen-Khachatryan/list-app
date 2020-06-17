const consListreducer = (consList = [{ id: 1, value: '' }], action) => {
  if (action.type === 'ADD_ITEM_TO_CONS') {
    return [...consList, action.payload];
  } else if (action.type === 'REMOVE_ITEM_FROM_CONS') {
    consList = consList.filter(element => element.value !== '');
    return [...consList, { id: action.payload.id + 1, value: '' }];
  }
  return consList;
};

export default consListreducer;

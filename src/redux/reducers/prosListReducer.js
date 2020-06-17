const prosListreducer = (prosList = [{ id: 1, value: '' }], action) => {
  console.log(action);
  if (action.type === 'ADD_ITEM_TO_PROS') {
    return [...prosList, action.payload];
  } else if (action.type === 'REMOVE_ITEM_FROM_PROS') {
    prosList = prosList.filter(element => element.value !== '');
    return [...prosList, { id: action.payload.id + 1, value: '' }];
  }
  return prosList;
};

export default prosListreducer;

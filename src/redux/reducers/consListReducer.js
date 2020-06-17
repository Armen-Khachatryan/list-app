function consListReducer(consList = [{ id: 1, value: '' }], action) {
  if (action.type === 'ADD_INPUT') {
    return [...consList, action.payload];
  }
  return consList;
}

export default consListReducer;

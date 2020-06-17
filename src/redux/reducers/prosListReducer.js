function addnewProsItem(prosList = [{ id: 1, value: '' }], action) {
  if (action.type === 'ADD_INPUT') {
    if (action.payload.id === prosList.length && action.payload.value) {
      return [...prosList, action.payload];
    }
  } else if (action.type === 'REMOVE_INPUT') {
    console.log(action.payload.id, prosList.le);
    if (!action.payload.value && action.payload.id !== prosList.length) {
      prosList = prosList.filter(element => element.value !== '');
      return [...prosList, { id: action.payload.id + 1, value: '' }];
    }
  }
  return prosList;
}

export default addnewProsItem;

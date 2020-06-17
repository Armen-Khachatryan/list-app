export const addItemToPros = payload => {
  return { type: 'ADD_ITEM_TO_PROS', payload };
};

export const removeItemFromPros = payload => {
  return { type: 'REMOVE_ITEM_FROM_PROS', payload };
};

export const addItemToCons = payload => {
  return { type: 'ADD_ITEM_TO_CONS', payload };
};

export const removeItemFromCons = payload => {
  return { type: 'REMOVE_ITEM_FROM_CONS', payload };
};

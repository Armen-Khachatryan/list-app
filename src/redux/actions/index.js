export const addInputField = payload => {
  return { type: 'ADD_INPUT', payload };
};

export const removeInputField = payload => {
  return { type: 'REMOVE_INPUT', payload };
};

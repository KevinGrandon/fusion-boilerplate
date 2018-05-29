function incrementReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.amount;
    default:
      return state;
  }
}

export default incrementReducer;

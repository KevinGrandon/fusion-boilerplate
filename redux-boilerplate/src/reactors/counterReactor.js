import {createReactor} from 'redux-reactors';
export const incrementReactor = createReactor('INCREMENT', (state, action) => {
  return {
    ...state,
    counter: state.counter + action.payload,
  };
});

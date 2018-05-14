import * as ACTION_TYPES from '../constants/ActionTypes';

export default function todos(state = [], action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ];

    case ACTION_TYPES.DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );

    case ACTION_TYPES.EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      );

    case ACTION_TYPES.COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      );

    case ACTION_TYPES.COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed);

      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }));

    case ACTION_TYPES.CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}

import * as ACTION_TYPES from '../constants/ActionTypes';

export const addTodo = text => ({ type: ACTION_TYPES.ADD_TODO, text });
export const deleteTodo = id => ({ type: ACTION_TYPES.DELETE_TODO, id });
export const editTodo = (id, text) => ({ type: ACTION_TYPES.EDIT_TODO, id, text });
export const completeTodo = id => ({ type: ACTION_TYPES.COMPLETE_TODO, id });
export const completeAllTodos = () => ({ type: ACTION_TYPES.COMPLETE_ALL_TODOS });
export const clearCompleted = () => ({ type: ACTION_TYPES.CLEAR_COMPLETED });
export const setVisibilityFilter = filter => ({ type: ACTION_TYPES.SET_VISIBILITY_FILTER, filter});

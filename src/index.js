import { createStore } from 'redux';

const initialState = {
  drink: '',
  chips: '',
  sandwich: '',
  snacks: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'REMOVE_DRINK':
      return { ...state, drink: '' };
    case 'REMOVE_CHIPS':
      return { ...state, chips: '' };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: '' };
    case 'EMPTY_LUNCHBOX':
      return { drink: null, chips: null, sandwich: null };
    case 'ADD_SNACKS':
      return { ...state, snacks: [...state.snacks, action.payload] };
    case 'REMOVE_SNACKS':
      return { ...state, snacks: state.snacks.filter((snack) => snack !== action.payload) };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_SNACKS',
  payload: 'apple'
});
console.log(store.getState());

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'tea'
});
console.log(store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'pretzels'
});
console.log(store.getState());

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'bologna'
});
console.log(store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH'
});
console.log(store.getState());

store.dispatch({
  type: 'REMOVE_DRINK'
});
console.log(store.getState());

store.dispatch({
  type: 'REMOVE_CHIPS'
});
console.log(store.getState());

store.dispatch({
  type: 'ADD_SNACKS',
  payload: 'pear'
});

console.log(store.getState());

store.dispatch({
  type: 'REMOVE_SNACKS',
  payload: 'pear'
});
console.log(store.getState());

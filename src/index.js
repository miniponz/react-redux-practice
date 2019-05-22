import { createStore } from 'redux';
import { EMPTY_LUNCHBOX, ADD_CHIPS, ADD_DRINK, ADD_SANDWICH, ADD_SNACKS, REMOVE_CHIPS, REMOVE_DRINK, REMOVE_SANDWICH, REMOVE_SNACKS, addChips, addDrink, addSandwich, addSnacks, removeChips, removeDrink, removeSandwich, removeSnacks } from './actions/lunchActions';

const initialState = {
  drink: '',
  chips: '',
  sandwich: '',
  snacks: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case ADD_CHIPS:
      return { ...state, chips: action.payload };
    case ADD_SANDWICH:
      return { ...state, sandwich: action.payload };
    case REMOVE_DRINK:
      return { ...state, drink: '' };
    case REMOVE_CHIPS:
      return { ...state, chips: '' };
    case REMOVE_SANDWICH:
      return { ...state, sandwich: '' };
    case EMPTY_LUNCHBOX:
      return { drink: null, chips: null, sandwich: null };
    case ADD_SNACKS:
      return { ...state, snacks: [...state.snacks, action.payload] };
    case REMOVE_SNACKS:
      return { ...state, snacks: state.snacks.filter((snack) => snack !== action.payload) };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(addSnacks('apple'));
console.log(store.getState());

store.dispatch(addDrink('tea'));
console.log(store.getState());

store.dispatch(addChips('pretzels'));
console.log(store.getState());

store.dispatch(addSandwich('bologna'));
console.log(store.getState());

store.dispatch(removeSandwich());
console.log(store.getState());

store.dispatch(removeDrink());
console.log(store.getState());

store.dispatch(removeChips());
console.log(store.getState());

store.dispatch(addSnacks('pear'));
console.log(store.getState());

store.dispatch(removeSnacks('pear'));
console.log(store.getState());

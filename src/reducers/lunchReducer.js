import { ADD_CHIPS, ADD_DRINK, ADD_SANDWICH, ADD_SNACKS, REMOVE_CHIPS, REMOVE_DRINK, REMOVE_SANDWICH, REMOVE_SNACKS, EMPTY_LUNCHBOX } from '../actions/lunchActions';

const initialState = {
  drink: '',
  chips: '',
  sandwich: '',
  snacks: []
};

export default function reducer(state = initialState, action) {
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




export const ADD_DRINK = 'ADD_DRINK';
export const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});

export const ADD_CHIPS = 'ADD_CHIPS';
export const addChips = chips => ({
  type: ADD_CHIPS,
  payload: chips
});

export const ADD_SANDWICH = 'ADD_SANDWICH';
export const addSandwich = sandwich => ({
  type: ADD_SANDWICH,
  payload: sandwich
});

export const ADD_SNACKS = 'ADD_SNACKS';
export const addSnacks = snacks => ({
  type: ADD_SNACKS,
  payload: snacks
});

export const REMOVE_DRINK = 'REMOVE_DRINK';
export const removeDrink = () => ({
  type: REMOVE_DRINK
});

export const REMOVE_CHIPS = 'REMOVE_CHIPS';
export const removeChips = () => ({
  type: REMOVE_CHIPS
});

export const REMOVE_SANDWICH = 'REMOVE_SANDWICH';
export const removeSandwich = () => ({
  type: REMOVE_SANDWICH,
});

export const REMOVE_SNACKS = 'REMOVE_SNACKS';
export const removeSnacks = snacks => ({
  type: REMOVE_SNACKS,
  payload: snacks
});

export const EMPTY_LUNCHBOX = 'EMPTY_LUNCHBOX';
export const emptyLunchbox = () => ({
  type: EMPTY_LUNCHBOX
});

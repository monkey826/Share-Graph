let nextTodoId = 0;
export const toggleMenu = (isMenuOpened) => {
  // console.log(isMenuOpened)
  return {
    type: 'TOGGLE_MENU',
    id: (nextTodoId++).toString(),
    isMenuOpened
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

export const openModule = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};

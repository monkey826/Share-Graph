
const home = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        isMenuOpened: !state.isMenuOpened,
      };
    default:
      return state;
  }
};

export default home;

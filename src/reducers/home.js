
const home = (state = {isMenuOpened: false}, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      console.log("State", state);
      console.log("Action", action);
      return {
        ...state,
        isMenuOpened: !action.isMenuOpened,
      };
    default:
      return state;
  }
};

export default home;

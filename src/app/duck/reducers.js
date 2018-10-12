const INITIAL_STATE = {
  options: {
    width: 10,
    height: 10,
    max: 9
  },
  active: false,
  pause: false,
  board: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_BOARD": {
      return {
        ...state,
        board: [...action.board]
      };
    }
    case "SET_PAUSE_STATE": {
      return {
        ...state,
        pause: action.pause
      };
    }
    case "SET_GAME_STATE": {
      return {
        ...state,
        active: action.active
      };
    }
    case "SET_OPTION": {
      const { option } = action;
      return {
        ...state,
        options: {
          ...state.options,
          ...option
        }
      };
    }
    default:
      return state;
  }
};
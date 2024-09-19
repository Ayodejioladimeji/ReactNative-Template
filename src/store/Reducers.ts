import {ACTIONS} from './Actions';

const reducers = (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case ACTIONS.USER:
      return {
        ...state,
        user: payload,
      };

    case ACTIONS.TOKEN:
      return {
        ...state,
        token: payload,
      };

    case ACTIONS.SUCCESS:
      return {
        ...state,
        success: payload,
      };

    case ACTIONS.ERROR:
      return {
        ...state,
        error: payload,
      };


    default:
      return state;
  }
};

export default reducers;

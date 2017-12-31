import { ADD_ITEM, REMOVE_ITEM, 
         TOGGLE_ITEM_COMPLETED, REMOVE_COMPLETED
} from '../actions/ActionTypes';
  
  const initialState = {
    items: [],
  };

  /*
    Actions describe the fact that something happened, but don't specify how the 
    application's state changes in response. This is the job of reducers.
    The reducer is a pure function that takes the previous state and an action, and
     returns the next state.

      (previousState, action) => newState

      reducer must be pure. Given the same arguments, it should calculate the next 
      state and return it. No surprises. No side effects. No API calls. No mutations. 
      Just a calculation.

  */
  export const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    const {items} = state;
  
    switch(type) {
      case ADD_ITEM: {
        return {
          ...state,
          items: [{label: payload, completed: false}, ...items],
        };
      }
      case REMOVE_ITEM: {
        return {
          ...state,
          items: items.filter((item, i) => i !== payload),
        };
      }
      case TOGGLE_ITEM_COMPLETED: {
        return {
          ...state,
          items: items.map((item, i) => {
            if (i === payload) {
              return {label: item.label, completed: !item.completed}
            }
            return item;
          }),
        };
      }
      case REMOVE_COMPLETED: {
        return {
          ...state,
          items: items.filter((item) => !item.completed)
        }
      }
      default: {
        return state;
      }
    }
  }
  
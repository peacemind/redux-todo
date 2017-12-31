/*
    Actions are payloads of information that send data from your application to 
    your store. They are the only source of information for the store. 
    You send them to the store using store.dispatch()

    Actions are plain JavaScript objects. Actions must have a type property that 
    indicates the type of action being performed. Types should typically be defined 
    as string constants. Once your app is large enough, you may want to move them 
    into a separate module.
*/

import { ADD_ITEM, REMOVE_ITEM, 
    TOGGLE_ITEM_COMPLETED, REMOVE_COMPLETED
} from './ActionTypes';

/*
    Action creators are exactly that—functions that create actions.
    The dispatch() function can be accessed directly from the store as 
    store.dispatch(), but more likely you'll access it using a helper like 
    react-redux's connect(). You can use bindActionCreators() to automatically 
    bind many action creators to a dispatch() function.
*/
export const actionCreators = {
    addItem: (item) => {
      return {type: ADD_ITEM, payload: item};
    },
    removeItem: (index) => {
      return {type: REMOVE_ITEM, payload: index};
    },
    toggleItemCompleted: (index) => {
      return {type: TOGGLE_ITEM_COMPLETED, payload: index};
    },
    removeCompleted: (item) => {
      return {type: REMOVE_COMPLETED, payload: item};
    },
  }

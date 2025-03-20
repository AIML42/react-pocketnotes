import { saveState } from "../../utils/saveAppState";

const persistMiddleware = (store) => (next) => (action) => {
  
    const result = next(action); 
    const state =  store.getState();
    saveState(state);

    return result;
  };

  export default persistMiddleware;
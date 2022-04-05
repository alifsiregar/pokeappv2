export const reducer = (state, action) => {
    switch (action.type) {
      case "loading/show":
        return {...state, loading: true, message: action.payload || "Loading..." };
      case "loading/hide":
        return {...state, loading: false, message: null };
    
      default:
        return state;
    }
  }
  
  export const initialState = {
    loading: false,
    message: null
  }
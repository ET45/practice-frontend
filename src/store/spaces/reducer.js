const initialState = {
  loading: true,
  spaces: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "spaces/loading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "spaces/getAllSpaces": {
      /* console.log("action", action); */
      return {
        ...state,
        spaces: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  loading: true,
  spacePage: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "spacePage/gotStory": {
      /* console.log("action", action); */
      return {
        ...state,
        loading: false,
        spacePage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

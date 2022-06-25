import axios from "axios";

const API_URL = "http://localhost:4000";

export function startLoading() {}

export function spaceFetched(data) {
  return {
    type: "spacePage/gotStory",
    payload: data,
  };
}

export default function fetchSpace(id) {
  return async function thunk(dispatch, getState) {
    try {
      const storyResponse = await axios.get(`${API_URL}/space/${id}`);

      /* console.log("story", storyResponse); */

      dispatch(spaceFetched(storyResponse.data));
    } catch (error) {
      console.log(error);
    }
  };
}

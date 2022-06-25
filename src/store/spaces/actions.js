import axios from "axios";

const API_URL = "http://localhost:4000/";

export function startLoading() {
  return {
    type: "spaces/loading",
  };
}

export function spacesFetched(data) {
  return {
    type: "spaces/getAllSpaces",
    payload: data,
  };
}

export default async function fetchSpace(dispatch, getState) {
  dispatch(startLoading());
  const response = await axios.get(`${API_URL}`);
  /* console.log("response", response.data);
   */
  dispatch(spacesFetched(response.data));
}

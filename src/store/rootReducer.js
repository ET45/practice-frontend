import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import spaces from "./spaces/reducer";
import spacePage from "./spacePage/reducer";

export default combineReducers({
  spaces,
  appState,
  user,
  spacePage,
});

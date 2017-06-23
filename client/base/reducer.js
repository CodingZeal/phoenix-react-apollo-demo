import { combineReducers } from "redux";

import { reducer as appReducer } from "modules/app";
import apolloClient from "./apolloClient";

export default combineReducers({
  app: appReducer,
  apollo: apolloClient.reducer()
});

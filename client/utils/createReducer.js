import { partialRight, test } from "ramda";
import { createReducer } from "zeal-redux-utils";

const isApolloAction = action => test(/^APOLLO_/, action.type);

export default partialRight(createReducer, [
  { allowNonStandardActionIf: isApolloAction }
]);

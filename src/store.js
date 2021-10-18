import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import _flattenDeep from "lodash/flattenDeep";
import { usersReducer as users, usersMiddleware } from "./client/reducers/users";
import { typesReducer as types, typesMiddleware } from "./client/reducers/types";
import { filesReducer as files, filesMiddleware } from "./client/reducers/files";

const reducer = combineReducers({
  users,
  types,
  files
});

const middleware = applyMiddleware.apply(null, _flattenDeep([
    usersMiddleware,
    typesMiddleware,
    filesMiddleware
]));


// enable redux debugging
const composeEnhancers = (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;

const middlewareEnhancer = composeEnhancers(middleware);
const store = createStore(reducer, middlewareEnhancer);
export default store;

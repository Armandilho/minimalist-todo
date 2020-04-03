import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";
import { createStore, applyMiddleware } from "redux";
import { Reducers } from "../reducers";

// export const Store = createStore(Reducers);

const reducer = storage.reducer(Reducers);
const engine = createEngine("my-save-key");

const middleware = storage.createMiddleware(engine);

const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
export const Store = createStoreWithMiddleware(reducer);

const load = storage.createLoader(engine);
load(Store);

load(Store)
  .then(newState => console.log("Loaded state:", newState))
  .catch(() => console.log("Failed to load previous state"));

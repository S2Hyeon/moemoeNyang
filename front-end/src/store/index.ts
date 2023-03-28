import { combineReducers, configureStore } from "@reduxjs/toolkit";
import memberSlice from "./memberSlice";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import sessionStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import mapSlice from "./mapSlice";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  member: memberSlice.reducer,
  map: mapSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export const typedUseSelector: TypedUseSelectorHook<RootState> =
  useReduxSelector;

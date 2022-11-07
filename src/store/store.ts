import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import {all} from "redux-saga/effects"
import { columnReducer, columnWatcher, userReducer, userWatcher } from "./features";

const rootReducer = combineReducers({
  user: userReducer,
  column: columnReducer
})
function* rootWatcher() {
  yield all([userWatcher(), columnWatcher()])
}

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootWatcher)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

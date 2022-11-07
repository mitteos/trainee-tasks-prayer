import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import {all} from "redux-saga/effects"
import { columnReducer, columnWatcher, prayerReducer, prayerWatcher, userReducer, userWatcher } from "./features";

const rootReducer = combineReducers({
  user: userReducer,
  column: columnReducer,
  prayer: prayerReducer
})
function* rootWatcher() {
  yield all([userWatcher(), columnWatcher(), prayerWatcher()])
}

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootWatcher)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

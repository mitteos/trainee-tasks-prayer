import { call, put, takeEvery } from "redux-saga/effects";
import { prayerActions } from "./prayerSlice";
import { AxiosError } from "axios";
import { axiosInstance } from "src/utils/api";
import { PrayerState } from "src/store/features/prayer/types";

const fetchAll = () => {
  return axiosInstance.get("prayers")
}
const fetchAdd = (body: PrayerState) => {
  const {title, description, columnId, checked} = body
  return axiosInstance.post("prayers", {title, description, checked, columnId})
}
const fetchRemove = (body: {prayerId: number}) => {
  return axiosInstance.delete(`prayers/${body.prayerId}`)
}
const fetchChange = (body: PrayerState) => {
  const {title, description, checked, columnId, id} = body
  return axiosInstance.put(`prayers/${id}`, {title, description, checked, columnId})
}

function* getAllPrayers() {
  try {
    const {data} = yield call(fetchAll)
    yield put(prayerActions.getPrayersSuccess(data))
  } catch (e) {
    if(e instanceof AxiosError) {
      yield put(prayerActions.setError(e.response?.data.message))
    }
    yield put(prayerActions.setError("Unknown error"))
  }
}

function* addPrayer(body: {type: string, payload: PrayerState}) {
  try {
    const {data} = yield call(fetchAdd, body.payload)
    yield put(prayerActions.addPrayerSuccess(data))
  } catch (e) {
    if(e instanceof AxiosError) {
      yield put(prayerActions.setError(e.response?.data.message))
    }
    yield put(prayerActions.setError("Unknown error"))
  }
}

function* removePrayer(body: {type: string, payload: {prayerId: number}}) {
  try {
    const {data} = yield call(fetchRemove, body.payload)
    yield put(prayerActions.removePrayerSuccess(body.payload.prayerId))
  } catch (e) {
    if(e instanceof AxiosError) {
      yield put(prayerActions.setError(e.response?.data.message))
    }
    yield put(prayerActions.setError("Unknown error"))
  }
}

function* changeChecked(body: {type: string, payload: PrayerState}) {
  try {
    yield call(fetchChange, body.payload)
    yield put(prayerActions.changeCheckedSuccess(body.payload))
  } catch (e) {
    if(e instanceof AxiosError) {
      yield put(prayerActions.setError(e.response?.data.message))
    }
    yield put(prayerActions.setError("Unknown error"))
  }
}

export function* prayerWatcher() {
  yield takeEvery(prayerActions.getPrayers.type, getAllPrayers)
  yield takeEvery(prayerActions.addPrayer.type, addPrayer)
  yield takeEvery(prayerActions.removePrayer.type, removePrayer)
  yield takeEvery(prayerActions.changeChecked.type, changeChecked)
}

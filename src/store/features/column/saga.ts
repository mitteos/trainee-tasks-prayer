import { call, put, takeEvery } from "redux-saga/effects";
import { columnActions } from "./columnSlice";
import { AxiosError } from "axios";
import { axiosInstance } from "src/utils/api";
import { ColumnState } from "src/store/features/column/types";

interface AddColumnPayload extends ColumnState{
  onSuccess: () => void
}

const fetchAll = () => {
  return axiosInstance.get("columns")
}
const fetchAdd = (body: ColumnState) => {
  const {title, description, userId: prayerId} = body
  return axiosInstance.post("columns", {title, description, prayerId})
}

function* getAllColumns() {
  try {
    const {data} = yield call(fetchAll)
    yield put(columnActions.getColumnsSuccess(data))
  } catch (e) {
    if(e instanceof AxiosError) {
      yield put(columnActions.setError(e.response?.data.message))
    }
    return put(columnActions.setError("Unknown error"))
  }
}

function* addColumn(body: {type: string, payload: AddColumnPayload}) {
  try {
    const {data} = yield call(fetchAdd, body.payload)
    yield put(columnActions.addColumnSuccess(data))
    yield call(body.payload.onSuccess)
  } catch (e) {
    if(e instanceof AxiosError) {
      yield put(columnActions.setError(e.response?.data.message))
    }
    yield put(columnActions.setError("Unknown error"))
  }
}

export function* columnWatcher() {
  yield takeEvery(columnActions.getColumns.type, getAllColumns)
  yield takeEvery(columnActions.addColumn.type, addColumn)
}

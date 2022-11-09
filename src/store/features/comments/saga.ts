import { call, put, takeEvery } from "redux-saga/effects";
import { commentActions } from "./commentSlice";
import { AxiosError } from "axios";
import { axiosInstance } from "src/utils/api";
import { AddCommentRequestBody } from "src/store/features/comments/types";

const fetchAll = () => {
  return axiosInstance.get("comments")
}
const fetchAdd = (requestBody: AddCommentRequestBody) => {
  const {body, prayerId, created} = requestBody
  return axiosInstance.post("comments", {body, created, prayerId})
}

function* getAll() {
  try {
    const {data} = yield call(fetchAll)
    yield put(commentActions.getAllSuccess(data))
  } catch (e) {
    if(e instanceof AxiosError) {
      yield put(commentActions.setError(e.response?.data.message))
    }
    yield put(commentActions.setError("Unknown error"))
  }
}

function* addComment(body: {type: string, payload: AddCommentRequestBody}) {
  try {
    const {data} = yield call(fetchAdd, body.payload)
    yield put(commentActions.addSuccess(data))
  } catch (e) {
    if(e instanceof AxiosError) {
      yield put(commentActions.setError(e.response?.data.message))
    }
    yield put(commentActions.setError("Unknown error"))
  }
}

export function* commentWatcher() {
  yield takeEvery(commentActions.getAll, getAll)
  yield takeEvery(commentActions.add, addComment)
}

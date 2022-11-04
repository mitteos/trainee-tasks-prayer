import {takeEvery, call, put} from "redux-saga/effects"
import { userActions } from "./userSlice";
import axios, { AxiosError } from "axios";

type RegisterRequest = {
  email: string;
  name: string;
  password: string
  type: string;
}

const registerRequest = async (body: RegisterRequest) => {
  const {email, name, password} = body
  return axios.post("https://prayer.herokuapp.com/auth/sign-up", {email, name, password})
}
const loginRequest = async (body: RegisterRequest) => {
  const {email, password} = body
  return axios.post("https://prayer.herokuapp.com/auth/sign-in", {email, password})
}

function* userRegister(body: {type: string, payload: RegisterRequest}) {
  try {
    const {data} = yield call(registerRequest, body.payload)
    yield put(userActions.authorizeSuccess(data))
  } catch (e) {
    if(e instanceof AxiosError) {
      yield put(userActions.authorizeError(e.response?.data.message))
    }
    return put(userActions.authorizeError("Unknown error"))
  }
}

function* userLogin(body: {type: string, payload: RegisterRequest}) {
  try {
    const {data} = yield call(loginRequest, body.payload)
    yield put(userActions.authorizeSuccess(data))
  } catch (e) {
    if(e instanceof AxiosError) {
      yield put(userActions.authorizeError(e.response?.data.message))
    }
    return put(userActions.authorizeError("Unknown error"))
  }
}

export function* userWatcher() {
  yield takeEvery(userActions.register.type, userRegister)
  yield takeEvery(userActions.login.type, userLogin)
}

import axios from "axios";
import { store } from "src/store/store";

export const $request = () => {
  const request = axios.create({
    baseURL: "https://prayer.herokuapp.com/"
  })
  request.interceptors.request.use((config) => {
    const {user: {userInfo}} = store.getState()
    if(userInfo.token) {
      config.headers!.Authorization = `Bearer ${userInfo.token}`
    }
    return config
  })
  return request
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./types";

interface InitialState {
  userInfo: UserState | null;
  error: string;
  isLoading: boolean;
}

const initialState: InitialState = {
  userInfo: null,
  error: "",
  isLoading: false
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoading = true
      state.error = ""
    },
    register(state, action) {
      state.isLoading = true
      state.error = ""
    },
    authorizeSuccess(state, action: PayloadAction<UserState>) {
      state.isLoading = false
      state.userInfo = action.payload
    },
    authorizeError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    logout(state) {
      state.userInfo = null
    }
  }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions

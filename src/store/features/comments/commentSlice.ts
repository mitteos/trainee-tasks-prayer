import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentState } from "./types";

interface InitialState {
  isLoading: boolean;
  error: string;
  comments: CommentState[] | null
}

const initialState: InitialState = {
  isLoading: false,
  error: "",
  comments: null
}

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getAll(state) {
      state.isLoading = true
      state.error = ""
    },
    getAllSuccess(state, action: PayloadAction<CommentState[]>) {
      state.isLoading = false
      state.comments = action.payload
    },
    add(state, action) {
      state.isLoading = true
      state.error = ""
    },
    addSuccess(state, action: PayloadAction<CommentState>) {
      state.isLoading = false
      state.comments!.push(action.payload)
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const commentReducer = commentSlice.reducer
export const commentActions = commentSlice.actions

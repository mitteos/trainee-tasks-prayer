import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColumnState } from "./types";

interface InitialState {
  isLoading: boolean;
  error: string;
  columns: ColumnState[] | null;
}

const initialState: InitialState = {
  isLoading: false,
  error: "",
  columns: null
}

const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    getColumns(state) {
      state.isLoading = true
      state.error = ""
    },
    getColumnsSuccess(state, action: PayloadAction<ColumnState[]>) {
      state.isLoading = false
      state.columns = action.payload
    },
    addColumn(state, action) {
      state.isLoading = true
      state.error = ""
    },
    addColumnSuccess(state, action: PayloadAction<ColumnState>) {
      state.isLoading = false
      state.columns!.push(action.payload)
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const columnReducer = columnSlice.reducer
export const columnActions = columnSlice.actions

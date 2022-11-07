import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddPrayerResponse, PrayerState } from "./types";

interface InitialState {
  isLoading: boolean;
  error: string;
  prayers: PrayerState[] | null
}
const initialState: InitialState = {
  isLoading: false,
  error: "",
  prayers: null
}

const prayerSlice = createSlice({
  name: "prayer",
  initialState,
  reducers: {
    getPrayers(state) {
      state.isLoading = true
      state.error = ""
    },
    getPrayersSuccess(state, action: PayloadAction<PrayerState[]>) {
      state.isLoading = false
      state.prayers = action.payload
    },
    addPrayer(state, action) {
      state.isLoading = true
      state.error = ""
    },
    addPrayerSuccess(state, action: PayloadAction<AddPrayerResponse>) {
      state.isLoading = false
      state.prayers?.push({...action.payload, columnId: action.payload.column.id})
      console.log(state.prayers);
    },
    removePrayer(state, action) {
      state.isLoading = true
      state.error = ""
    },
    removePrayerSuccess(state, action: PayloadAction<number>) {
      state.isLoading = false
      state.prayers = state.prayers!.filter(prayer => prayer.id !== action.payload)
    },
    changeChecked(state, action) {
      state.isLoading = true
      state.error = ""
    },
    changeCheckedSuccess(state, action: PayloadAction<PrayerState>) {
      state.isLoading = false
      state.prayers = state.prayers!.map(prayer => {
        if(prayer.id === action.payload.id) {
          return action.payload
        }
        return prayer
      })
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    }
  },
})

export const prayerReducer = prayerSlice.reducer
export const prayerActions = prayerSlice.actions

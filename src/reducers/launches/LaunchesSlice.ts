import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Launch } from "../../types/launches";
import * as spacexAPI from "../launches/spacexAPI";

interface LaunchSliceState {
  data: Launch[];
  currentPage: number;
  firstTime: boolean;
  bookmarks: Launch[];
}

const initialState: LaunchSliceState = {
  data: [],
  currentPage: 0,
  firstTime: true,
  bookmarks: [],
};

export const fetchLaunches = createAsyncThunk<
  Launch[],
  {},
  { state: RootState }
>("launches/fetchLaunches", async (_, { getState }) => {
  const { firstTime, currentPage } = getState().launches;
  if (firstTime) {
    const resp = await spacexAPI.getLaunches();
    return resp;
  } else {
    const resp = await spacexAPI.getLaunches(currentPage + 10);
    return resp;
  }
});

export const launchesSlice = createSlice({
  name: "launches",
  initialState: initialState,
  reducers: {
    wipeLaunches: (state) => {
      state.data = [];
      state.currentPage = 0;
      state.firstTime = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLaunches.fulfilled, (state, action) => {
      state.firstTime = false;
      state.data = [...state.data, ...action.payload];
      state.currentPage += 10;
    });
  },
});

export const { wipeLaunches } = launchesSlice.actions;
export const selectData = (state: RootState) => state.launches.data;

export default launchesSlice.reducer;

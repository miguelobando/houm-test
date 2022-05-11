import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Launch } from "../../types/launches";
import * as spacexAPI from "../launches/spacexAPI";

interface LaunchSliceState {
  data: Launch[];
  currentPage: number;
  firstTime: boolean;
  bookmarks: Launch[];
  previousParams: string[];
  isInProcess: boolean;
  hasMore: boolean;
}

const initialState: LaunchSliceState = {
  data: [],
  currentPage: 0,
  firstTime: true,
  bookmarks: [],
  previousParams: [],
  isInProcess: false,
  hasMore: true,
};

export const fetchLaunches = createAsyncThunk<
  Launch[],
  { params: string },
  { state: RootState }
>("launches/fetchLaunches", async (arg, { getState }) => {
  const { firstTime, currentPage, previousParams } = getState().launches;
  if (firstTime) {
    // const params: string[] = [...previousParams, ...arg.params];
    const resp = await spacexAPI.getLaunches([]);
    return resp;
  } else {
    const resp = await spacexAPI.getLaunches(
      [...previousParams, arg.params],
      currentPage + 10
    );
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
    },
    resetLaunches: (state) => {
      state.data = [];
      state.currentPage = 0;
      state.firstTime = true;
    },
    removeFilter: (state, action) => {
      const i = state.previousParams.findIndex((e) =>
        e.includes(action.payload)
      );
      const a = state.previousParams.splice(i, i);
      state.previousParams = a;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLaunches.fulfilled, (state, action) => {
      state.firstTime = false;
      state.data = [...state.data, ...action.payload];
      state.currentPage += 10;
      state.previousParams = [...state.previousParams, action.meta.arg.params];
      console.log(state.previousParams);
      state.isInProcess = false;
      state.hasMore = action.payload.length !== 10 ? false : true;
    });
    builder.addCase(fetchLaunches.pending, (state) => {
      state.isInProcess = true;
    });
  },
});

export const { wipeLaunches, removeFilter } = launchesSlice.actions;
export const selectData = (state: RootState) => state.launches.data;
export const selectIsInProcess = (state: RootState) =>
  state.launches.isInProcess;
export const selectHasMore = (state: RootState) => state.launches.hasMore;
export const selectPreviousParams = (state: RootState) =>
  state.launches.previousParams;
export default launchesSlice.reducer;

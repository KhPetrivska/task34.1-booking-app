import { createSlice, createAction } from "@reduxjs/toolkit";

const destinationSlice = createSlice({
  name: "destination",
  initialState: [],
  reducers: {
    setDestinationList: (_, action) => action.payload,
  },
});

export const { setDestinationList } = destinationSlice.actions;

export const fetchDestinationList = createAction("FETCH_DESTINATION_LIST");

export default destinationSlice.reducer;

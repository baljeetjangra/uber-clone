import { createSlice } from "@reduxjs/toolkit";

interface IState {
  origin: null | number;
  destination: number | null;
  travelTimeInformation: number | null;
}

const initialState: IState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState: initialState,
  reducers: {
    setOrigin: (state: IState, action: any) => {
      state.origin = action.payload;
    },
    setDestination: (state: IState, action: any) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state: IState, action: any) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// selecters
export const selectOrigin = (state: IState) => state.origin;

export default navSlice.reducer;

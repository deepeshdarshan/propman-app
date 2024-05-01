import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HotelReducer from "../features/AppData/HSR/HSRData/HotelSlice";
import FilterReducer from "../features/AppData/SideBar/Filter/FilterSlice";

export const store = configureStore({
  reducer: {
    hotel: HotelReducer,
    filter: FilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

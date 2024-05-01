import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";
import Hotel from "../../../../types/hotel";
import { fetchHotels } from "./HotelActions";

const initialState: Readonly<Hotel.HotelState> = {
    hotels: [],
    status: 'idle'
}

export const HotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHotels.pending, (state) => {
            state.status = 'pending';
        }).addCase(fetchHotels.fulfilled, (state, action) => {
            for (let hotel of action.payload.data) {
                state.hotels.push(hotel);
            }
            state.status = "success";
        }).addCase(fetchHotels.rejected, (state) => {
            state.status = "error";
        })
    }
});

export const hotels = (state: RootState) => state.hotel.hotels;
export const status = (state: RootState) => state.hotel.status;

export default HotelSlice.reducer;
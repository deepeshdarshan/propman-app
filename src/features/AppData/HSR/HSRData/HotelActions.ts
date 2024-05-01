import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Hotel from "../../../../types/hotel";

export const fetchHotels = createAsyncThunk(
    'hotel/get',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('./hotels.json');
            return {
                data: response.data.hotels as Hotel.HotelCardProps[]
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getToken = createAsyncThunk(
    'hotel/getToken',
    async (params: string, { rejectWithValue }) => {
        console.log('params::', params);
        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };
        try {
            const response = await axios.post('https://integ.traveldoo.com/cas/oidc/token', params, config);
            // const response = await axios.post('https://integ.tvld.tech/cas/oidc/token', params, config);
            console.log('response::', response);
            return {
                data: response.data
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
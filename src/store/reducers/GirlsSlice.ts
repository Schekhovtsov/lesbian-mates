import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGirls} from "../../models/IGirls";

interface IGirlsState {
    girls: IGirls[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: IGirlsState = {
    girls: [],
    isLoading: false,
    error: '',
    count: 0,
}

export const girlsSlice = createSlice({
    name: 'girls',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload
        }
    }
})

export default girlsSlice.reducer;
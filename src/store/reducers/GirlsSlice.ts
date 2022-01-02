import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IGirl } from "../../models/IGirl";


interface IGirlsState {
    girls: IGirl[];
}

const initialState: IGirlsState = {
    girls: [
        {name: 'Veronica Leal'},
        {name: 'Lilu Moon'}
    ],
}

export const girlsSlice = createSlice({
    name: 'girls',
    initialState,
    reducers: {

    }
})

export default girlsSlice.reducer;
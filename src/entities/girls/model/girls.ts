import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IGirl {
    name: string
}

interface IGirlsState {
    girls: IGirl[];
}

const initialState: IGirlsState = {
    girls: [
        {name: 'Veronica Leal'},
        {name: 'Lilu Moon'},
        {name: 'Nadia Besinger'},
        {name: 'Zazie Skymm'}
    ],
}

export const girlsSlice = createSlice({
    name: 'girls',
    initialState,
    reducers: {

    }
})
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchVideos, IVideo} from "../../videos";
import {videosAPI} from "../../../shared/api";

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

    },
    extraReducers: {

    }
})
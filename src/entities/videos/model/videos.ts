import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import { fetchVideos } from "../../../shared/api";

export interface IServerResponse {
    videos: IVideo[]
}

export interface IVideo {
    id: string,
    title: string,
    keywords: string,
    url: string,
    default_thumb: {
        size: string,
        width: number,
        height: number,
        src: string
    },
    embed: string
}

interface IVideosState {
    videos: IVideo[];
    isLoading: boolean;
    error: string;
}

const initialState: IVideosState = {
    videos: [],
    isLoading: false,
    error: '',
}

export const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchVideos.fulfilled.type]: (state, action: PayloadAction<IVideo[]>) => {
            state.isLoading = false;
            state.error = '';
            state.videos = action.payload;
        },
        [fetchVideos.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchVideos.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IVideo} from "../../models/IVideo";
import {fetchVideos} from "../actions/ActionCreators";

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
        videosFetching(state) {
            state.isLoading = true;
        },
        videosFetchingSuccess(state, action: PayloadAction<IVideo[]>) {
            state.isLoading = false;
            state.error = '';
            state.videos = action.payload;
        },
        videosFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
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

export default videosSlice.reducer;
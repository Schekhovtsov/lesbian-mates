import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

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
    }
}

const base_url = 'https://www.eporner.com/api/v2/video/search/';

export const fetchVideos = createAsyncThunk(
    'videos/fetchAll',
    async (girls: string, thunkAPI) => {
        try {
            const response = await axios.get<IServerResponse>(`${base_url}?&format=json`,
                {
                    params: {
                        query: `${girls}`,
                        //per_page: 2,
                    },
                })
            return response.data.videos;
        }   catch(e) {
            return thunkAPI.rejectWithValue('Не удалось получить видео')
        }
    }
)

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
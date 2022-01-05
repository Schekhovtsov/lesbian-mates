import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {videosAPI} from "../../../shared/api";

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
    length_min: string,
    rate: number,
    views: number,
    added: string,
}

interface IVideosState {
    videos: IVideo[];
    isLoading: boolean;
    error: string;
    searchQuery: string;
}

interface IFetchVideo {
    girls: string;
    searchQuery?: string;
}

interface ISortArgs {
    searchQuery: string;
    sortBy: string;
}

const initialState: IVideosState = {
    videos: [],
    isLoading: false,
    error: '',
    searchQuery: '',
}


export const fetchVideos = createAsyncThunk(
    'videos/fetchAll',
    async (girls:string, thunkAPI) => {
        try {
            const response = await videosAPI.getVideos(girls)
            return response.data.videos;
        }   catch(e) {
            return thunkAPI.rejectWithValue('Не удалось получить видео')
        }
    }
)

export const sortVideos = createAsyncThunk(
    'videos/sortVideos',
    async (args: ISortArgs, thunkAPI) => {
        try {
            const response = await videosAPI.sortVideos(args.searchQuery, args.sortBy)
            return response.data.videos;
        }   catch(e) {
            return thunkAPI.rejectWithValue('Не удалось получить видео')
        }
    }
)


export const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchVideos.fulfilled.type]: (state, action: any) => {
            state.isLoading = false;
            state.error = '';
            state.videos = action.payload;
            state.searchQuery = action.meta.arg;
        },
        [fetchVideos.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchVideos.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [sortVideos.fulfilled.type]: (state, action: PayloadAction<IVideo[]>) => {
            state.isLoading = false;
            state.error = '';
            state.videos = action.payload;
        },
        [sortVideos.pending.type]: (state) => {
            state.isLoading = true;
        },
        [sortVideos.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },

    }
})
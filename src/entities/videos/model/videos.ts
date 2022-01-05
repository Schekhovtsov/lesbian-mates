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
}

interface sortArgs {
    girls: string;
    sortBy: string;
}

const initialState: IVideosState = {
    videos: [],
    isLoading: false,
    error: '',
}



export const fetchVideos = createAsyncThunk(
    'videos/fetchAll',
    async (girls: string, thunkAPI) => {
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
    async (args: sortArgs, thunkAPI) => {
        try {
            const response = await videosAPI.sortVideos(args.girls, args.sortBy)
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
        // посмотреть как было в видео и по клику на кнопку сортировки делать диспатч.
        // так же глянуть как в АПИ называется метод сортировки. возможно я опечатслся
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
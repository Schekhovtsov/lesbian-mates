import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {videosAPI} from "../../../shared/api";
import {QueryDefinition} from "@reduxjs/toolkit/query";

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
    searchingNames: string[];
    /*meta?: { arg: string };*/
    appIsInitialized: boolean;
}

interface ISortArgs {
    searchQuery: string;
    sortBy: string;
}

interface IFetchVideoActionPayload {
    videos: any;
    searchQuery: string
    namesOriginal: string[]
}

const initialState: IVideosState = {
    videos: [],
    isLoading: false,
    error: '',
    searchQuery: '',
    searchingNames: [],
    appIsInitialized: false,
}

export interface IFetchVideosGirlsNames {
    girlsFormatted: string;
    girlsOriginal: string[];
    page?: number,
}

const userLang = navigator.language;

const getLocaleUrl = (obj: IVideo) => {

    let url;

    switch (userLang) {
        case 'ru': url = obj.url.replace('www', 'de'); break;
        default: url = obj.url;
    }

    return url;
}

export const fetchVideos = createAsyncThunk(
    'videos/fetchAll',
    async (obj: IFetchVideosGirlsNames, thunkAPI) => {
        try {
            const response = await videosAPI.getVideos(obj.girlsFormatted, obj.page)
            const searchQuery = obj.girlsFormatted;
            const namesOriginal = obj.girlsOriginal;

            response.data.videos.map((obj) => {
                obj.url = getLocaleUrl(obj);
            })

            return {
                videos: response.data.videos,
                searchQuery,
                namesOriginal,
            };
        }   catch(e) {
            return thunkAPI.rejectWithValue('Couldn\'t get the video')
        }
    }
)

//export const clearVideos =

export const sortVideos = createAsyncThunk(
    'videos/sortVideos',
    async (args: ISortArgs, thunkAPI) => {
        try {
            const response = await videosAPI.sortVideos(args.searchQuery, args.sortBy)

            response.data.videos.map((obj) => {
                obj.url = getLocaleUrl(obj);
            })

            return response.data.videos;
        }   catch(e) {
            return thunkAPI.rejectWithValue('Couldn\'t get the video')
        }
    }
)

export const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        clearVideos(state) {
            state.videos = [];
        }
    },
    extraReducers: {
        [fetchVideos.fulfilled.type]: (state, action: PayloadAction<IFetchVideoActionPayload>) => {
            state.isLoading = false;
            state.appIsInitialized = true;
            state.error = '';
            state.videos =  state.videos.concat(action.payload.videos);
            state.searchQuery = action.payload.searchQuery;
            state.searchingNames = action.payload.namesOriginal;
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
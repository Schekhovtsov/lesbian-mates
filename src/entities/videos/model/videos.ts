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
    thumbs: {
        [key: number]: {
            src: string
        }
    }
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
    appIsInitialized: boolean;
    sortBy: string;
    isFetchMode: boolean,
    isSortMode: boolean;
}

interface IFetchVideoActionPayload {
    videos: any;
    searchQuery: string;
    page: number,
    sortBy: string;
}

const initialState: IVideosState = {
    videos: [],
    isLoading: false,
    error: '',
    searchQuery: '',
    appIsInitialized: false,
    sortBy: 'latest',
    isFetchMode: false,
    isSortMode: false,
}

export interface ISearchingGirlsNames {
    girlsFormatted: string,
    girlsOriginal: string[],
}

interface IFetchVideosRequest {
    searchQuery: string;
    sortBy?: string;
    page: number;
}

const userLang = navigator.language;

const getLocaleUrl = (obj: IVideo) => {

    let url;

    switch (userLang) {
        case 'ru': url = obj.url.replace('www', 'de'); break;
        default: url = obj.url;
    }

    //console.log(userLang)

    return url;
}

export const fetchVideos = createAsyncThunk(
    'videos/fetchAll',
    async (args: IFetchVideosRequest, thunkAPI) => {
        try {
            const response = await videosAPI.getVideos(args.searchQuery, args.page)

            response.data.videos.map((obj) => {
                obj.url = getLocaleUrl(obj);
            })

            return {
                videos: response.data.videos,
                searchQuery: args.searchQuery,
            };
        }   catch(e) {
            return thunkAPI.rejectWithValue('Couldn\'t get the video')
        }
    }
)

export const sortVideos = createAsyncThunk(
    'videos/sortVideos',
    async (args: IFetchVideosRequest, thunkAPI) => {
        try {
            const response = await videosAPI.sortVideos(args.searchQuery, args.page, args.sortBy)

            response.data.videos.map((obj) => {
                obj.url = getLocaleUrl(obj);
            })

            return {
                videos: response.data.videos,
                sortBy: args.sortBy,
            };
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

            state.isFetchMode = true;
            state.isSortMode = false;
        },
        [fetchVideos.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchVideos.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [sortVideos.fulfilled.type]: (state, action: PayloadAction<IFetchVideoActionPayload>) => {
            state.isLoading = false;
            state.error = '';
            state.videos =  state.videos.concat(action.payload.videos);
            state.sortBy = action.payload.sortBy;
            state.isFetchMode = false;
            state.isSortMode = true;
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
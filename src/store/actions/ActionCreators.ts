import axios from "axios";
import {AppDispatch} from "../store";
import { girlsSlice } from "../reducers/GirlsSlice";
import { videosSlice } from "../reducers/VideosSlice";
import {IServerResponse, IVideo} from "../../models/IVideo";
import { createAsyncThunk } from "@reduxjs/toolkit";

const base_url = 'https://www.eporn';

/*export const fetchVideos = (girls: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(videosSlice.actions.videosFetching())
        const response = await axios.get<IServerResponse>(`${base_url}?&format=json`,
            {
                params: {
                    query: `${girls}`,
                    //per_page: 2,
                },
            })
        dispatch(videosSlice.actions.videosFetchingSuccess(response.data.videos))
    } catch (e) {
        dispatch(videosSlice.actions.videosFetchingError)
    }
}*/

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

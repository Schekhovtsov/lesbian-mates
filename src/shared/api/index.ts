import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IServerResponse} from "../../entities/videos";

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
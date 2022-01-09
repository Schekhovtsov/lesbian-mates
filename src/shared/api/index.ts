import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IServerResponse} from "../../entities/videos";

const base_url = 'https://de.eporner.com/api/v2/video/search/';

export const videosAPI = {

    getVideos(girls: string) {
         return axios.get<IServerResponse>(`${base_url}?&format=json`,
            {
                params: {
                    query: `lesbian-${girls}`,
                    per_page: 2,

                },
            });
    },

    sortVideos(girls: string, sortBy: string) {
        return axios.get<IServerResponse>(`${base_url}?&format=json`,
            {
                params: {
                    query: `lesbian-${girls}`,
                    order: sortBy,
                },
            })
    }

}
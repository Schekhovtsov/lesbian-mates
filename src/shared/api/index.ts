import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IServerResponse, IVideo} from "../../entities/videos";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import * as buffer from "buffer";


let base_url = 'https://de.eporner.com/api/v2/video/search/';


export const videosAPI = {

    getVideos(girls: string, page: number = 1) {

         return axios.get<IServerResponse>(`${base_url}?&format=json`,
            {
                params: {
                    query: `lesbian-${girls}`,
                    page: page,
                    per_page: 20,

                },
            });

    },

    sortVideos(girls: string, sortBy: string) {
        return axios.get<IServerResponse>(`${base_url}?&format=json`,
            {
                params: {
                    query: `lesbian-${girls}`,
                    order: sortBy,
                    per_page: 20,
                },
            })
    }

}
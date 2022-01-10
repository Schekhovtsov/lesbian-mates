import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IServerResponse, IVideo} from "../../entities/videos";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import * as buffer from "buffer";


let base_url = 'https://de.eporner.com/api/v2/video/search/';


export const videosAPIold = {

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

interface IResponseVideos {
    count: number
    page: number
    per_page: number
    start: number
    time_ms: number
    total_count: number
    total_pages: number,
    videos: IVideo[]
}

export const videosAPI = createApi({
    reducerPath: 'videosAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://de.eporner.com/api/v2/video/search/' }),
    endpoints: (builder) => ({
        fetchAllVideos: builder.query<IResponseVideos, string>({
            query: (girls) => ({
                url: `/?&format=json`,
                params: {
                    query: girls,
                    per_page: 2,
                }
            })
        })

    })
})

export const { useFetchAllVideosQuery } = videosAPI

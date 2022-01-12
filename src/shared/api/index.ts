import axios from "axios";
import {IServerResponse} from "../../entities/videos";


let base_url = 'https://de.eporner.com/api/v2/video/search/';


export const videosAPI = {

    getVideos(searchQuery: string, page: number = 1) {

         return axios.get<IServerResponse>(`${base_url}?&format=json`,
            {
                params: {
                    query: `lesbian-${searchQuery}`,
                    page: page,
                    per_page: 20,

                },
            });

    },

    sortVideos(searchQuery: string, page: number, sortBy?: string) {
        return axios.get<IServerResponse>(`${base_url}?&format=json`,
            {
                params: {
                    query: `lesbian-${searchQuery}`,
                    order: sortBy,
                    page: page,
                    per_page: 20,
                },
            })
    }

}
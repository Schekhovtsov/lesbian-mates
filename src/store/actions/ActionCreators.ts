import axios from "axios";
import {AppDispatch} from "../store";
import { girlsSlice } from "../reducers/GirlsSlice";
import { videosSlice } from "../reducers/VideosSlice";
import {IServerResponse, IVideo} from "../../models/IVideo";

const base_url = 'https://www.eporner.com/api/v2/video/search/';

export const fetchVideos = (girls: string) => async (dispatch: AppDispatch) => {

    try {
        dispatch(videosSlice.actions.videosFetching)

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
}


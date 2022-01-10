import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { girlsSlice } from "../entities/girls";
import { videosSlice } from "../entities/videos/model";
import {videosAPI} from "../shared/api";


const rootReducer = combineReducers({
    girlsReducer: girlsSlice.reducer,
    videosReducer: videosSlice.reducer,
    [videosAPI.reducerPath]: videosAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(videosAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



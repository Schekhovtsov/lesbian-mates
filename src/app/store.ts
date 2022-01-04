import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { girlsSlice } from "../entities/girls/model";
import {videosSlice} from "../entities/videos/model";


const rootReducer = combineReducers({
    girlsReducer: girlsSlice.reducer,
    videosReducer: videosSlice.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



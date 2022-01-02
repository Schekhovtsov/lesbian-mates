import {combineReducers, configureStore} from "@reduxjs/toolkit";
import girlsReducer from './reducers/GirlsSlice'
import videosReducer from './reducers/VideosSlice'

const rootReducer = combineReducers({
    girlsReducer,
    videosReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



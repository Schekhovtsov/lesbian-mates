import {combineReducers, configureStore} from "@reduxjs/toolkit";
import girlsReducer from './reducers/GirlsSlice'

const rootReducer = combineReducers({
    girlsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



import React from 'react';
import s from '../scss/App.module.scss'
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {girlsSlice} from "../store/reducers/GirlsSlice";

const Home = () => {

    const {count} = useAppSelector(state => state.girlsReducer);
    const {increment} = girlsSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <div>

            <h1>Счётчик: {count}</h1>
            <button onClick={() => dispatch(increment(1))}>
                Увеличить счетчик
            </button>

        </div>
    );
};

export default Home;
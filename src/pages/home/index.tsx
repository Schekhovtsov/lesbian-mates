import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Videos from '../../entities/videos/ui';
import GirlsSelector from '../../features/girls-selector';

const HomePage = () => {

    const {videos, isLoading, error: videosError} =
        useAppSelector(state => state.videosReducer);
    const {girls} = useAppSelector(state => state.girlsReducer);

    return (
        <div>

            <GirlsSelector girls={girls}/>

            { isLoading && <h1>Идёт загрузка</h1> }
            { videosError && <h1>{videosError}</h1> }

            <Videos videos={videos}/>

        </div>
    );
};

export default HomePage;
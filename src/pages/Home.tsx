import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/redux";
import Selector from '../components/Selector';
import Videos from '../components/Videos';

const Home = () => {

    const {videos, isLoading: videosIsLoading, error: videosError} =
        useAppSelector(state => state.videosReducer);
    const {girls} = useAppSelector(state => state.girlsReducer);

    useEffect(() => {

    }, [])

    //console.log(videos)

    return (
        <div>

            { videosError && <div>{videosError}</div> }

            <Selector girls={girls}/>

            <Videos videos={videos}/>



            {   }
            {/*{JSON.stringify(girls, null, 2)}*/}



        </div>
    );
};

export default Home;
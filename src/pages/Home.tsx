import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import { videosSlice } from '../store/reducers/VideosSlice';
import {fetchVideos} from "../store/actions/ActionCreators";
import Selector from '../components/Selector';

const Home = () => {
    const dispatch = useAppDispatch();

    const {videos, isLoading: videosIsLoading, error: videosError} =
        useAppSelector(state => state.videosReducer);
    const {girls} = useAppSelector(state => state.girlsReducer);

    useEffect(() => {
        //dispatch(fetchVideos())
    }, [])

    return (
        <div>

            { videosError && <div>{videosError}</div> }

            <Selector girls={girls}/>

            {
                videos.map(obj =>
                    <div><strong>Title:</strong> {obj.title}<br />
                        <strong>Keywords:</strong> {obj.keywords}<br /><br /></div>
                )
            }

            {   }
            {/*{JSON.stringify(girls, null, 2)}*/}



        </div>
    );
};

export default Home;
import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import Videos from '../../entities/videos/ui';
import GirlsSelector from '../../features/girls-selector';

import {Divider, Typography} from 'antd';

const { Title, Paragraph, Text } = Typography;

const HomePage = () => {

    const {videos, isLoading, error: videosError} =
        useAppSelector(state => state.videosReducer);

    const {girls} = useAppSelector(state => state.girlsReducer);

    return (
        <div>

            {
                videos.length === 0 && (
                    <div>
                        <Title>Welcome to lesbian-mates</Title>
                        <Title level={3}>Did girls do porn together?</Title>
                        <Paragraph>This is a service that allows you to see if specific girls were filmed in porn together as lesbians
                        </Paragraph>

                        <Divider />
                    </div>
                )
            }

            <GirlsSelector girls={girls}/>

            { isLoading && <h1>Loading videos</h1> }
            { videosError && <h1>{videosError}</h1> }

            <Videos videos={videos}/>

        </div>
    );
};

export default HomePage;
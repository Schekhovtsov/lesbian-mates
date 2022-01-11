import React from 'react';
import Videos from '../../entities/videos/ui';
import GirlsSelector from '../../features/girls-selector';

import {Divider, Typography} from 'antd';
import {useAppSelector} from "../../app/hooks";
import Preloader from "../../widgets/preloader";

const { Title, Paragraph } = Typography;

const HomePage = () => {

    const {videos, isLoading, error: videosError, appIsInitialized} =
        useAppSelector(state => state.videosReducer);

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

            <GirlsSelector />

            { isLoading && <Preloader /> }

            { (videos.length === 0 && appIsInitialized) && <h1>Lesbian videos not found</h1> }
            { videos.length > 0 && <Videos videos={videos} isLoading={isLoading} /> }

            { videosError && <h1>{videosError}</h1> }

        </div>
    );
};

export default HomePage;
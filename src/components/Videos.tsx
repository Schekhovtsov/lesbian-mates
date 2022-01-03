import React, {FC} from 'react';
import {Col, Row} from "antd";
import app from "../scss/App.module.scss";
import module from "../scss/Videos.module.scss";
import {IVideo} from "../models/IVideo";

interface VideosProps {
    videos: IVideo[],
}

const Videos: FC<VideosProps> = ({videos}) => {



    return (
        <div>

            {
                videos.length > 0 &&
                (<Row className={app.row}>
                    <Col className={app.col} xs={24} xl={24}>
                        <h1>Results:</h1>
                    </Col>
                </Row>)
            }

            <Row className={app.row} gutter={[14, 8]}>
                {
                    videos.map(obj =>
                        (
                            <Col className={app.col} xs={24} xl={6}>
                                <div className={module.videoBlock}>
                                    <div className={module.content}>
                                        <div className={module.title}>{obj.title}</div>
                                        <div className={module.video}>#</div>
                                    </div>
                                </div>
                            </Col>
                        )
                    )
                }
            </Row>
        </div>
    );
};

export default Videos;
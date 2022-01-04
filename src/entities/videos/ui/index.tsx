import React, {FC} from 'react';
import {Button, Col, Row} from "antd";
import module from "./styles.module.scss";
import {IVideo} from "../model";

interface VideosProps {
    videos: IVideo[],
}

const VideosUI: FC<VideosProps> = ({videos}) => {

    const titleSlice = (title: string): string => {
        let sliced = title.slice(0, 47);
        if (sliced.length < title.length) {
            sliced += '...';
        }
        return sliced;
    }

    return (
        <div>
            {
                (videos.length > 0)
                    ? (<Row className='row'>
                        <Col className='col' xs={24} xl={24}>
                            <h1>Results:</h1>
                        </Col>
                    </Row>)
                    : null /*<Col className='col' xs={24} xl={24}>
                        <h1>Videos not found</h1>
                    </Col>*/
            }

            <Row className='row' gutter={[14, 8]}>
                {
                    videos && videos.map(obj =>
                        (
                            <Col className='col' xs={24} sm={12} md={8} xl={6} key={obj.id}>
                                <div className={module.videoBlock}>
                                    <div className={module.content}>
                                        <div className={module.title}>
                                            {titleSlice(obj.title)}
                                        </div>
                                        <div className={module.video}>
                                            &nbsp;
                                            {/*<img src={obj.default_thumb.src} alt={obj.title} />*/}
                                        </div>
                                        <div className={module.link}>
                                            <Button type='primary' block>Open video</Button>
                                        </div>
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

export default VideosUI;
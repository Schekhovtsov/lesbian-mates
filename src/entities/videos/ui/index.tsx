import React, {FC} from 'react';
import {Col, Row} from "antd";
import module from "./styles.module.scss";
import {IVideo} from "../model";
import cn from 'classnames';
import VideosFilter from "../../../features/videos-filter";
import {IGirl} from "../../girls";
import {useAppSelector} from "../../../app/hooks";


interface VideosProps {
    videos: IVideo[],
    girls: IGirl[],
}

const VideosUI: FC<VideosProps> = ({videos, girls}) => {

    const titleSlice = (title: string): string => {

        let sliced = title.slice(0, 57);
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
{/*                        <Col className='col' xs={24} xl={24}>
                            <h1>Results:</h1>
                        </Col>*/}
                        <Col className='col' xs={24} xl={24}>
                            <VideosFilter />
                        </Col>
                    </Row>)
                    : null /*<Col className='col' xs={24} xl={24}>
                        <h1>Videos not found</h1>
                    </Col>*/
            }

            <Row className='row' gutter={[14, 8]}>
                {


                    videos && videos.map((obj, index) =>
                        (



                            <Col className={cn('col', module.videos)} xs={24} sm={12} md={8} xl={6} key={obj.id}>
                                <div className={module.videoBlock}>
                                    <div className={module.content}>



                                            <div className={module.title}>
                                                {/*{obj.title}*/}

                                                <a href={ obj.url }
                                                   title={obj.title}
                                                   target='_blank'>
                                                    {titleSlice(obj.title)}
                                                </a>
                                            </div>


                                        <a href={ obj.url }
                                           title={obj.title}
                                           target='_blank'>
                                            <div style={{backgroundImage: "url(" + {/*obj.default_thumb.src*/} + ")",
                                                        backgroundSize: "cover" }}
                                                className={module.video}>

                                                   <div className={module.infoTimeAndView}>
                                                        <div className={module.cornerBlock}>
                                                            {obj.length_min}
                                                        </div>
                                                        <div className={module.cornerBlock}>
                                                            👁 {obj.views}
                                                        </div>
                                                   </div>

                                            </div>
                                        </a>

                                       {/* { tagsToName(obj.title)?.map(item => {
                                            titleNamesArray.push(item)
                                        } ) }
                                        { tagsToName(obj.keywords)?.map(item => {
                                            keysNamesArray.push(item)
                                        } ) }

                                        <div className={module.tagsBlock}>
                                            { getUniqueNames(titleNamesArray, keysNamesArray).map(item => (
                                                <div className={module.tag}>
                                                    {item}
                                                </div>
                                            )) }
                                        </div>

                                        { titleNamesArray.length = 0 }
                                        { keysNamesArray.length = 0 }*/}

                                        <div className={module.info}>
                                            <div>Added: {obj.added.slice(0, 10)}</div>
                                            <div>Rate: {obj.rate}</div>
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
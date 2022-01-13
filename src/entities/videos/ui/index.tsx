import React, {FC, useEffect, useRef, useState} from 'react';
import {Col, Row} from "antd";
import module from "./styles.module.scss";
import {fetchVideos, ISearchingGirlsNames, IVideo, sortVideos} from "../model";
import cn from 'classnames';
import VideosFilter from "../../../features/videos-filter";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import Preloader from "../../../widgets/preloader";


interface VideosProps {
    videos: IVideo[],
    isLoading: boolean
}

const VideosUI: FC<VideosProps> = ({videos, isLoading}) => {

    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);

    const {isFetchMode, isSortMode, sortBy} = useAppSelector(state => state.videosReducer);

    const { searchingNames } =
        useAppSelector(state => state.girlsReducer);

    const titleSlice = (title: string): string => {

        let sliced = title.slice(0, 57);
        if (sliced.length < title.length) {
            sliced += '...';
        }
        return sliced;
    }

    const loadMoreVideos = (searchingNames: ISearchingGirlsNames) => {

        const searchQuery = searchingNames.girlsFormatted;

        setPage( page + 1 )

        const request = {
            searchQuery,
            page,
            sortBy,
        }

        if (isFetchMode) { dispatch(fetchVideos(request)); }
        if (isSortMode) { dispatch(sortVideos(request)); }

    }

    const getVideoImages = (obj: IVideo): Array<string> => {
        let i = 0;
        let images = [];
        const time = 1000;

        const imagesCount = Object.keys(obj.thumbs).length;
        for (let k = 0; k < imagesCount; k++) {
            images.push(obj.thumbs[k].src)
        }

        return images;

    }

    const slideshowBlock = useRef<HTMLDivElement>(null);

    const videoRefs: any = [];

    videos.forEach(_ => {
        videoRefs.push(React.createRef());
    });

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const startSlideshow = (obj: IVideo, index: number, key: number) => {

        setTimeout(() => {
            if (key < 9) {
                videoRefs[index].current.style.backgroundImage = "url(" + getVideoImages(obj)[key] + ")";
                key += 1;
                startSlideshow(obj, index, key)
            }
        }, 1000)

    }

    const endSlideshow = (obj: IVideo, index: number, key: number) => {
        videoRefs[index].current.style.backgroundImage = "url(" + getVideoImages(obj)[key] + ")";
    }


    useEffect(() => {
        setPage(2);
    }, [])

    return (
        <div>

            {
                (videos.length > 0)
                    ? (<Row className='row'>
                        <Col className='col' xs={24} xl={24}>
                            <VideosFilter />
                        </Col>
                    </Row>)
                    : null
            }

            <Row className='row' gutter={[14, 8]}>
                {

                    videos && videos.map((obj, index) =>
                        (

                            <Col className={cn('col', module.videos)} xs={24} sm={12} md={8} xl={6} key={obj.id}>
                                <div className={module.videoBlock}>
                                    <div className={module.content}>

                                            <div className={module.title}>
                                                <a href={ obj.url }
                                                   title={obj.title}
                                                   target='_blank'>
                                                    {titleSlice(obj.title)}
                                                </a>
                                            </div>


                                        <a href={ obj.url }
                                           title={obj.title}
                                           target='_blank'>


                                            <div style={{   backgroundImage: "url(" + obj.default_thumb.src + ")"   ,
                                                        backgroundSize: "cover" }}
                                                className={module.video}
                                                 ref={videoRefs[index]}
                                                 onMouseEnter={() => {startSlideshow(obj, index, 0)}}
                                                 onMouseLeave={() => {endSlideshow(obj, index, 0)}}
                                                 onTouchStart={() => {startSlideshow(obj, index, 0)}}
                                                 onTouchEnd={() => {endSlideshow(obj, index, 0)}} >

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

            <Row className='row' gutter={[14, 8]}>
                <Col className='col'
                     xs={24} sm={24} md={24} xl={24}>
                        { isLoading && <Preloader /> }
                </Col>
            </Row>

            <Row className='row' gutter={[14, 8]}>
                <Col className={cn('col', module.loadMore)}
                     xs={24} sm={24} md={24} xl={24}
                     onClick={() => loadMoreVideos(searchingNames)} >
                        <span>
                            Load more videos
                        </span>
                </Col>
            </Row>

        </div>
    );
};

export default VideosUI;
import React, {FC} from 'react';
import {Button, Col, Row} from "antd";
import module from "./styles.module.scss";
import {IVideo} from "../model";
import cn from 'classnames';
import VideosFilter from "../../../features/videos-filter";
import { Link } from 'react-router-dom';
import {IGirl} from "../../girls";
import {useAppSelector} from "../../../hooks/redux";
import {keyboardKey} from "@testing-library/user-event";


interface VideosProps {
    videos: IVideo[],
    girls: IGirl[],
}

const VideosUI: FC<VideosProps> = ({videos, girls}) => {

    const {searchQuery, searchingNames} = useAppSelector(state => state.videosReducer)

    const titleSlice = (title: string): string => {

        let sliced = title.slice(0, 47);
        if (sliced.length < title.length) {
            sliced += '...';
        }
        return sliced;
    }

    let keys;
    let keyName;

    interface ITitleNames {
        videoNumber: number,
        namesArray: Array<string>
    }

    let titleNames: ITitleNames = {
        videoNumber: 0,
        namesArray: []
    };

    let titleNamesArray: Array<string> = [];
    let keysNamesArray: Array<string> = [];

    interface IGetUniqueNames {

    }

    const getUniqueNames = (array1: Array<string>, array2: Array<string>) => {
        const array = array1.concat(array2);
        let uniqueArray: Array<string> = [];
        array.forEach((element) => {
            if (!uniqueArray.includes(element)) {
                uniqueArray.push(element);
            }
        });
        return uniqueArray
    }

    let tags = 'lesbians, milf, teens, Busty babe Adriana Chechik and friend Abigail Mac steamy lesbian sex';


    const regexp = /[A-Z][a-z]+\s[A-Z][a-z]+/g;
    //console.log(tags.match(regexp))
    //alert( regexp.test(name1) );

    const tagsToName = (tags: string): RegExpMatchArray | null => {
        const regexp = /[A-Z][a-z]+\s[A-Z][a-z]+/g;
        return tags.match(regexp);
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
                                                <a href={obj.url} target='_blank'>
                                                    {titleSlice(obj.title)}
                                                </a>
                                            </div>


                                        <a href={obj.url} target='_blank'>
                                            <div style={{backgroundImage: "url(" + {/*obj.default_thumb.src*/} + ")",
                                                        backgroundSize: "cover" }}
                                                className={module.video}>

                                                    <div className={module.playButtonBlock}>
                                                        <div>
                                                            {/*▶️*/}
                                                        </div>
                                                    </div>

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

                                        { tagsToName(obj.title)?.map(item => {
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
                                        { keysNamesArray.length = 0 }

                                        <div className={module.info}>
                                            <div>Added: {obj.added.slice(0, 10)}</div>
                                            <div>Views: {obj.views}</div>
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
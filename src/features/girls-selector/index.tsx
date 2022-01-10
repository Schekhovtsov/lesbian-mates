import React, {FC, useState} from 'react';
import {Button, Col, Form, Row, Select} from 'antd';

import {IGirl, setSearchingGirls} from '../../entities/girls';
import {fetchVideos, IFetchVideosGirlsNames, videosSlice} from "../../entities/videos";
import {useAppDispatch, useAppSelector} from '../../app/hooks';

interface ISelectorProps {
    girls: IGirl[]
}

const GirlsSelector: FC<ISelectorProps> = ({girls}) => {


    const dispatch = useAppDispatch();

    const {searchingNames} =
        useAppSelector(state => state.girlsReducer);

    const {Option} = Select;

    const {clearVideos} = videosSlice.actions;
    const handleToHomePage = () => {

    }

    const [page, setPage] = useState(1);

    const children: Array<object> = [];

    girls.map(girl =>
        children.push(<Option key={girl.name}>{girl.name}</Option>)
    );

    const onFinish = (values: { selected: string[] }) => {

        dispatch(clearVideos());
        setPage(1);

        const girlsOriginal = values.selected;

        const formattedValues = values.selected.map((name: string) =>
            name
                .toLowerCase()
                .replace(/\s/g, '-')
        );

        const girlsFormatted = formattedValues.toString().replace(/,/g, '-');

        const request = {
            girlsFormatted,
            girlsOriginal,
            page
        }

        dispatch(setSearchingGirls(request)); // а мб и не нужен?  в видео есть тоже самое ж всё =))))))))))))
        dispatch(fetchVideos(request));



    };

    const loadMoreVideos = (searchingNames: IFetchVideosGirlsNames) => {

        const girlsFormatted = searchingNames.girlsFormatted;
        const girlsOriginal = searchingNames.girlsOriginal

        setPage( page + 1 )

        const request = {
            girlsFormatted,
            girlsOriginal,
            page,
        }

        dispatch(fetchVideos(request));
    }

    return (


        // делать фетчинг обычного поиска видео и внутрь передавать объект из стора с именами девочек
        <div>
            Page: {page}
            <button onClick={() => loadMoreVideos(searchingNames)}>Подгрузить</button>

            <Row className='row'>
                <Col className='col' xs={24} xl={24}>
                    <Form
                        name="girls-form"
                        onFinish={onFinish}
                    >

                        <Form.Item
                            name="selected"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select minimum 1 girl',
                                    type: 'array',
                                    min: 1,
                                },
                            ]}
                        >
                            <Select mode="tags"
                                    size="large"
                                    placeholder="Please, select one or more pornstars">

                                {
                                    girls.map(girl =>
                                        <Option key={girl.name}>{girl.name}</Option>
                                    )
                                }

                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Button size="large" type="primary" htmlType="submit">
                                Search
                            </Button>
                        </Form.Item>

                    </Form>
                </Col>


            </Row>

        </div>
    );
};

export default GirlsSelector;
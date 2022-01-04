import React, {FC} from 'react';
import {Select, Button, Form, Row, Col} from 'antd';

import { IGirl } from '../../entities/girls';
import { useAppDispatch } from '../../hooks/redux';
import {fetchVideos} from "../../shared/api";

interface ISelectorProps {
    girls: IGirl[]
}

const GirlsSelector: FC<ISelectorProps> = ({girls}) => {

    const dispatch = useAppDispatch();

    const {Option} = Select;

    const children: Array<object> = [];

    girls.map(girl =>
        children.push(<Option key={girl.name}>{girl.name}</Option>)
    );

    function handleChange(values: Array<string>) {
        const formattedValues = values.map(name =>
            name
                .toLowerCase()
                .replace(/\s/g, '-'))
        console.log(formattedValues)
    }

    const onFinish = (values: { selected: string[] }) => {

        const formattedValues = values.selected.map((name: string) =>
            name
                .toLowerCase()
                .replace(/\s/g, '-')
        );

        const girls = formattedValues.toString().replace(/,/g, '-');
        dispatch(fetchVideos(girls))

    };

    return (

        <div>
            <h1>Please, select</h1>
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
                                    placeholder="Choose your girls">

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
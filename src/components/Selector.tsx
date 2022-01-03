import React, {FC} from 'react';
import {Select, Button, Form, Row, Col} from 'antd';
import app from '../scss/App.module.scss'

import {IGirl} from '../models/IGirl';
import {useAppDispatch} from "../hooks/redux";
import {fetchVideos} from "../store/actions/ActionCreators";

interface ISelectorProps {
    girls: IGirl[]
}

const Selector: FC<ISelectorProps> = ({girls}) => {

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
                <Row className={app.row}>
                    <Col className={app.col} xs={24} xl={24}>
                        <Form
                            name="girls-form"
                            onFinish={onFinish}
                        >

                            <Form.Item
                                name="selected"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select minimum 2 girls',
                                        type: 'array',
                                        min: 2,
                                    },
                                ]}
                            >
                                <Select mode="multiple"
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

export default Selector;
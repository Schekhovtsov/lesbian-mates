import React from 'react';
import { Select, Button, Form } from 'antd';
import s from '../scss/Selector.module.scss'

import { IGirl } from '../models/IGirl';
import {useAppDispatch} from "../hooks/redux";
import {fetchVideos} from "../store/actions/ActionCreators";

interface ISelectorProps {
    girls: IGirl[]
}

const Selector = ( { girls }: ISelectorProps ) => {

    const dispatch = useAppDispatch();

    const { Option } = Select;

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
            <div className={s.searchForm}>

                <Form
                    name="girls-form"
                    style={{width: '100%'}}
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

                {/*<Select
                    mode="multiple"
                    autoFocus
                    allowClear
                    style={{width: '100%'}}
                    size="large"
                    placeholder="Please select"
                    onChange={handleChange}

                >
                    {children}
                </Select>
                <Button type="primary"
                        onClick={() => handleSearch}>Search</Button>*/}
            </div>
        </div>
    );
};

export default Selector;
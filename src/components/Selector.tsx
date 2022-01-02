import React from 'react';
import { Select, Button, Form } from 'antd';
import s from '../scss/Selector.module.scss'

import { IGirl } from '../models/IGirl';

interface ISelectorProps {
    girls: IGirl[]
}

const Selector = ( { girls }: ISelectorProps ) => {

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




    const onFinish = (values: Array<string>) => {
        console.log('Received values of form: ', values);

        const formattedValues = values.map(name =>
            name
                .toLowerCase()
                .replace(/\s/g, '-'))
        console.log(formattedValues)
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
                        name="selected-girls"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your favourite colors!',
                                type: 'array',
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
                            Submit
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
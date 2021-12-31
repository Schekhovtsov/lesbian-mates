import React from 'react';
import s from "../pages/Home.module.css";
import { Layout } from 'antd';

const { Content } = Layout;

const Content_ = () => {
    return (
        <Content style={{ padding: '0 50px' }}>

            <div className={s.siteLayoutContent}>
                Content
            </div>

        </Content>
    );
};

export default Content_;
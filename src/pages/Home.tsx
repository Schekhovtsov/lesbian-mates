import React from 'react';
import s from './Home.module.css'
import { Layout } from 'antd';
import Header_ from '../components/Header_';
import Content_ from '../components/Content_';
import Footer_ from '../components/Footer_';

const Home = () => {
    return (
        <Layout className="layout">
            <Header_ />
            <Content_ />
            <Footer_ />
        </Layout>
    );
};

export default Home;
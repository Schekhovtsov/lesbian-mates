import React from 'react';

import './index.scss';

import {Col, Layout, Menu, PageHeader, Row} from "antd";

import {withProviders} from './providers';
import {Routing} from '../pages';
import {Link, NavLink} from "react-router-dom";

import logo from '../shared/images/logo.png'
import {fetchVideos, videosSlice} from "../entities/videos";
import {useAppDispatch} from "./hooks";

const {Content, Header, Footer} = Layout;

const App = () => {

    const {clearVideos} = videosSlice.actions;
    const dispatch = useAppDispatch();

    const handleToHomePage = () => {
        dispatch(clearVideos())
    }

    return (

        <Layout className="layout">

            <Row className='row header'>
                <Col className='col headerContent'
                     xs={24} sm={24} md={20} xl={20} xxl={16}>
                    <PageHeader>
                        <a href='/'>
                            <div className='header logo' onClick={() => handleToHomePage()}>
                                <img src={logo} alt='lesbian-mates logo' />
                            </div>
                        </a>
                        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key={1}><NavLink to='/'>Girls</NavLink></Menu.Item>
                            <Menu.Item key={2}><NavLink to='/about'>About</NavLink></Menu.Item>
                        </Menu>
                    </PageHeader>
                </Col>
            </Row>

            <Row className='row'>
                <Col className='col content'
                     xs={24} sm={24} md={20} xl={20} xxl={16}>
                    <Content>
                        <Routing />
                    </Content>
                </Col>
            </Row>

            <Footer style={{ textAlign: 'center' }}>
                lesbian-mates © 2022 <br />Created by Schekhovtsov
            </Footer>
        </Layout>
    );
}

export default withProviders(App);

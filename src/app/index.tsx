import React from 'react';

import './index.scss';

import {Col, Layout, Menu, PageHeader, Row} from "antd";

import {withProviders} from './providers';
import {Routing} from '../pages';
import {Link, NavLink} from "react-router-dom";

import logo from '../shared/images/logo.png'

const {Content, Header, Footer} = Layout;

const App = () => {

    return (

        <Layout className="layout">

            <Row className='row header'>
                <Col className='col headerContent'
                     xs={24} sm={24} md={20} xl={20} xxl={17}>
                    <PageHeader>
                        <Link to='/'>

                            <div className='header logo'>
                                <img src={logo} alt='lesbian-mates logo' />
                            </div>
                        </Link>
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
                lesbian-mates © 2022 Created by Schekhovtsov
            </Footer>
        </Layout>
    );
}

export default withProviders(App);

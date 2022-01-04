import React from 'react';

import './index.scss';

import {Col, Layout, Menu, Row} from "antd";

import { withProviders } from './providers';
import { Routing } from '../pages';
import {Link} from "react-router-dom";

const {Content, Header, Footer} = Layout;

function App() {

    return (
        <Layout className="layout">

            <Row className='row header'>
                <Col className='col headerContent'
                     xs={24} sm={24} md={20} xl={20} xxl={17}>
                    <Header>
                        <Link to='/'><div className='header logo' /></Link>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key={1}>Finder</Menu.Item>
                            <Menu.Item key={2}>About</Menu.Item>
                        </Menu>
                    </Header>
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
                mates © 2022 Created by Schekhovtsov | <Link to='/about'>About</Link>
            </Footer>
        </Layout>
    );
}

export default withProviders(App);

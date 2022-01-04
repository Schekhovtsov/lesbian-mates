import React from 'react';


import Header_ from "../components/Header_";
import Footer_ from "../components/Footer_";

import './index.scss';


import {Col, Layout, Row} from "antd";

import { withProviders } from './providers';
import { Routing } from '../pages';

const {Content} = Layout;

function App() {

    return (
        <Layout className="layout">

            <Row className='row header'>
                <Col className='col headerContent'
                     xs={24} sm={24} md={20} xl={20} xxl={17}>
                    <Header_/>
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

            <Footer_/>
        </Layout>
    );
}

export default withProviders(App);

import React from 'react';
import 'antd/dist/antd.css';
import Home from './pages/Home/Home';
import Header_ from "./components/Header_";
import Footer_ from "./components/Footer_";
import {Col, Layout, Row} from "antd";
import module from './scss/App.module.scss'
import classNames from "classnames";

const {Content} = Layout;

function App() {


    return (
        <Layout className="layout">
            <Row className={classNames(module.row, module.header)}>
                <Col className={classNames(module.headerContent, module.col)}
                     xs={24} sm={24} md={20} xl={20} xxl={17}>
                    <Header_/>
                </Col>
            </Row>

            <Row className={module.row}>
                <Col className={classNames(module.content, module.col)}
                     xs={24} sm={24} md={20} xl={20} xxl={16}>
                    <Content>
                        <Home/>
                    </Content>
                </Col>
            </Row>

            <Footer_/>
        </Layout>
    );
}

export default App;

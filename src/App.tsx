import React from 'react';
import 'antd/dist/antd.css';
import Home from './pages/Home';
import Header_ from "./components/Header_";
import Footer_ from "./components/Footer_";
import {Layout} from "antd";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import { girlsSlice } from './store/reducers/GirlsSlice';
import s from './scss/App.module.scss'

const { Content } = Layout;

function App() {



  return (
      <Layout className="layout">
          <Header_/>
              <Content className={s.content}>
                    <Home />
              </Content>
          <Footer_/>
      </Layout>
  );
}

export default App;

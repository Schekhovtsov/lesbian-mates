import React from 'react';
import s from '../scss/Header_.module.scss'
import {Layout, Menu} from "antd";
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Header_ = () => {
    return (
        <Header>
            <Link to='/'><div className={s.logo} /></Link>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key={1}>Finder</Menu.Item>
            </Menu>
        </Header>
    );
};

export default Header_;
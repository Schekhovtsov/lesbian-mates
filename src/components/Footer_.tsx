import React from 'react';
import { Layout,  } from 'antd';
import { Link } from 'react-router-dom';

const { Footer } = Layout;

const Footer_ = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            mates © 2022 Created by Schekhovtsov | <Link to='/about'>About</Link>
        </Footer>
    );
};

export default Footer_;
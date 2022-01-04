import {Dropdown, Menu } from 'antd';
import React, { useState } from 'react';
import module from './style.module.scss';



const Index: React.FC = () => {

    const [activeFilter, setActiveFilter] = useState('популярности')

    const menu = (
        <Menu>
            <Menu.Item>
            <span className="noopener noreferrer"
                  onClick={() => {
                      setActiveFilter('популярности')
                  }}>
                популярности
            </span>
            </Menu.Item>
            <Menu.Item>
                <span className="noopener noreferrer"
                      onClick={() => {
                          setActiveFilter('дате добавления')
                      }}>
               дате добавления
            </span>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className={module.filterPanel}>
            <span>Сортировать по: </span>

            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {activeFilter}
                </a>
            </Dropdown>

        </div>
    );
};

export default Index;
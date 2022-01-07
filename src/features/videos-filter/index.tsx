import {Dropdown, Menu } from 'antd';
import React, { useState } from 'react';
import module from './style.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {sortVideos} from "../../entities/videos";
import { IGirl } from '../../entities/girls';

interface IVideosFilter {

}

const VideosFilter: React.FC<IVideosFilter> = () => {

    const dispatch = useAppDispatch();

    const {searchQuery} =
        useAppSelector(state => state.videosReducer);

    const [activeFilter, setActiveFilter] = useState('latest')

    const sortTypes = [
        { name: 'popular', value: 'most-popular' },
        { name: 'latest', value: 'latest' },
        { name: 'longest ↓', value: 'longest' },
        { name: 'shortest ↑ ', value: 'shortest' },
        { name: 'rating', value: 'top-rated' },
        { name: 'top weekly', value: 'top-weekly' },
        { name: 'top monthly', value: 'top-monthly' },
    ]

    const handleSortTypeButton = (name: string, sortBy: string) => {
        // здесь первый аргумент я хочу забирать из стора
        setActiveFilter(name)
        dispatch(sortVideos({searchQuery, sortBy}))
    }

    const menu = (
        <Menu>
            {
                sortTypes.map((obj) =>
                    <Menu.Item key={obj.value}>
                        <span className="noopener noreferrer"
                              onClick={() => { handleSortTypeButton(obj.name, obj.value) }}>
                            {obj.name}
                        </span>
                    </Menu.Item>
                )
            }
        </Menu>
    );

    return (
        <div className={module.filterPanel}>
            <span>Sort by: </span>

            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {activeFilter}
                </a>
            </Dropdown>

        </div>
    );
};

export default VideosFilter;
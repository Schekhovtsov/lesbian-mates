import {Dropdown, Menu } from 'antd';
import React, { useState } from 'react';
import module from './style.module.scss';
import {sortVideos, videosSlice} from "../../entities/videos";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

interface IVideosFilter {

}

const VideosFilter: React.FC<IVideosFilter> = () => {

    const dispatch = useAppDispatch();

    const { searchQuery, sortBy } =
        useAppSelector(state => state.videosReducer);

    const [activeFilter, setActiveFilter] = useState('')

    const {clearVideos} = videosSlice.actions;


    const sortTypes = [
        { name: 'popular', value: 'most-popular' },
        { name: 'latest', value: 'latest' },
        { name: 'longest ↓', value: 'longest' },
        { name: 'shortest ↑ ', value: 'shortest' },
        { name: 'rating', value: 'top-rated' },
        { name: 'top weekly', value: 'top-weekly' },
        { name: 'top monthly', value: 'top-monthly' },
    ]

    const handleSortTypeButton = (name: string, activeFilter: string, page: number) => {
        dispatch(clearVideos());
        setActiveFilter(name)
        dispatch(sortVideos({searchQuery, sortBy: activeFilter, page}))
    }

    const menu = (
        <Menu>
            {
                sortTypes.map((obj) =>
                    <Menu.Item key={obj.value}>
                        <span className="noopener noreferrer"
                              onClick={() => { handleSortTypeButton(obj.name, obj.value, 1) }}>
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
                    { sortBy }
                </a>
            </Dropdown>

        </div>
    );
};

export default VideosFilter;
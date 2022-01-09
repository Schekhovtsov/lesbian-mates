import React from 'react';
import module from './index.module.scss'

const Preloader = () => {
    return (
        <div className={module.center}>

            <div className={module.ldsHeart}>
                <div></div>
            </div>

        </div>
    );
};

export default Preloader;
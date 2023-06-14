import React from 'react';
import SimplePreloader from './firstPreloader/simplePreloader';
import "./Preloaders.scss"


const Preloaders = () => {
    return (
        <div className='Preloaders'>
            <SimplePreloader />
        </div>
    );
}

export default Preloaders;

import React from 'react';
import useCanvas from './forCanvas';
import "./Something_else.scss"

const ContentSomethingElse = () => {

    // const canvas = useCanvas();

    return (
        <div className='something_else'>
            <div className="something_else_nav">
                <button className='button1'>link1</button>
                <button className='button2'>link2</button>
            </div>
            {/* <div className="content_something_else">
                <canvas id="canvas"></canvas>
            </div> */}
            <div className='div_with_blocks'>
                <div className="block1"></div>
                <div className="block2"></div>
            </div>
        </div>
    );
}

export default ContentSomethingElse;

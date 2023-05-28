import React from 'react';
import useCanvas from './forCanvas';
import "./Something_else.scss"

const ContentSomethingElse = () => {

    // const canvas = useCanvas();

    return (
        <div className='something_else'>
            <div className="something_else_nav">
                <button>link1</button>
                <button>link2</button>
            </div>
            <div className="content_something_else">
                <canvas id="canvas"></canvas>
            </div>
        </div>
    );
}

export default ContentSomethingElse;

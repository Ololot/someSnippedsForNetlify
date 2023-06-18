import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import "./CSSTransitionLoader.scss"

const CSSTransitionLoader = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className='CSSTransitionLoader'>
            <button className='buttonShowHide' onClick={() => { setVisible(!visible) }}>
                {visible ? "hide" : "show"}
            </button>
            <CSSTransition
                in={visible}
                timeout={500}
                classNames={{
                    enterActive: "circle-show",
                    enterDone: "circle-rotate",
                    exitActive: "circle-hide"
                }}
                mountOnEnter
                unmountOnExit
            >
                <div className="circle"></div>
            </CSSTransition>
        </div>
    );
}

export default CSSTransitionLoader;

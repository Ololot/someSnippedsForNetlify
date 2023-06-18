import React, { useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import "./SwitchTransitionLoader.scss"
// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const modes = ["out-in", "in-out"];

const SwitchTransitionLoader = () => {
    const [visible, setVisible] = useState(false)
    const [mode, setMode] = useState("out-in");
    // const redLoader = useRef(null);
    // const bluLoader = useRef(null);
    // const nodeRef = visible ? redLoader : bluLoader;


    return (
        <div className='SwitchTransitionLoader'>
            <button className='buttonShowHide' onClick={() => { setVisible(!visible) }}>
                {visible ? "hide" : "show"}
            </button>
            <button className='buttonMode' onClick={() => {
                if (mode == "out-in") setMode("in-out")
                else setMode("out-in")
            }}>
                {mode}
            </button>
            <SwitchTransition mode={mode}>
                <CSSTransition
                    key={visible}
                    // nodeRef={nodeRef}
                    // addEndListener={(node, done) => node.current.addEventListener("transitionend", done, false)}
                    // in={visible}
                    timeout={500}
                    classNames={
                        visible ? {
                            enterActive: "circleRed-show",
                            enterDone: "circleRed-rotate",
                            exitActive: "circleRed-hide"
                        }
                            :
                            {
                                enterActive: "circleBlue-show",
                                enterDone: "circleBlue-rotate",
                                exitActive: "circleBlue-hide"
                            }}
                // mountOnEnter
                // unmountOnExit
                >
                    <div className={visible ? "circleRed" : "circleBlue"}></div>
                    {/* <div className="circleRed"></div> */}

                </CSSTransition>
            </SwitchTransition>
        </div >
    );
}

export default SwitchTransitionLoader;

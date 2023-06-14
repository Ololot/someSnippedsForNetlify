import React, { useState } from 'react';
import "./simplePreloader.scss"
import { Transition } from 'react-transition-group';


const SimplePreloader = () => {

    const [visible, setVisible] = useState(false)

    return (
        <div className="simplePreloader">
            <button className='buttonShowHide' onClick={() => { setVisible(!visible) }}>
                show
            </button>
            <Transition
                in={visible}
                timeout={500}
                unmountOnExit
                mountOnEnter
                onEnter={console.log("onEnter")}
                onEntering={console.log("onEntering")}
                onEnterer={console.log("onEnterer")}
                onExiting={console.log("onExiting")}
                onExited={console.log("onExited")}
                onExit={console.log("onExit")}
            >
                {state => <div className={`circle ${state}`}> </div>}

            </Transition>



        </div >
    );
}

export default SimplePreloader;

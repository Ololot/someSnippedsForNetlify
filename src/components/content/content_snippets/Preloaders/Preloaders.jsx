import React, { useRef, useEffect } from 'react';
import SimplePreloader from './firstPreloader/simplePreloader';
import CSSTransitionLoader from './CSSTransitionLoader/CSSTransitionLoader';
import { useOverlayScrollbars } from "overlayscrollbars-react";

import "./Preloaders.scss"
import SwitchTransitionLoader from './SwitchTransitionLoader/SwitchTransitionLoader';


const Preloaders = () => {

    const options = { scrollbars: { autoHide: 'never' } };
    const events = { scroll: () => { /* ... */ } };
    const defer = true
    const scrollRef = useRef();
    const [initialize, instance] = useOverlayScrollbars({ options, events, defer });

    useEffect(() => {
        initialize(scrollRef.current);
    }, [initialize]);

    return (
        <div className='Preloaders' ref={scrollRef}>
            <SimplePreloader />
            <CSSTransitionLoader />
            <SwitchTransitionLoader />
        </div>
    );
}

export default Preloaders;

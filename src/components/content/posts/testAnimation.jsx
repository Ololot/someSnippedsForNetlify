import React, { useEffect, useState, useRef } from 'react';
import { useOverlayScrollbars } from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';
import "./posts.scss"
import { Transition } from 'react-transition-group';

const OnePostButton = ({ post }) => {
    const [opened, setOpened] = useState(false);
    return (
        <div className='OnePostButton' key={post.id} onClick={() => { setOpened(!opened) }}>
            <li className='OnePostButton_title'>{post.title}</li>
            <Transition
                in={opened}
                timeout={1000}
                mountOnEnter
                unmountOnExit
            >
                {state => <div className={`openedSpace ${state}`}></div>}
            </Transition>
        </div>
    )
}



const TestAnimation = () => {
    const [posts, setPosts] = useState([]);
    const options = { scrollbars: { autoHide: 'never' } };
    const events = { scroll: () => { /* ... */ } };
    const defer = true

    const scrollRef = useRef();
    const [initialize, instance] = useOverlayScrollbars({ options, events, defer });

    useEffect(() => {
        initialize(scrollRef.current);
    }, [initialize]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    useEffect(() => { console.log(posts) }, [posts])

    return (
        <div className='posts' ref={scrollRef}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {posts.map((post) => {
                    if (post.id < 10)
                        return <OnePostButton post={post} key={post.id} />
                    else return null
                }
                )}
            </div>
        </div>
    );
}

export default TestAnimation;

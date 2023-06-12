import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useOverlayScrollbars } from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';
import "./posts.scss"
import { Transition } from 'react-transition-group';




const Posts = () => {
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
                {posts.map((post) =>
                    <NavLink key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </NavLink>
                )}
            </div>
        </div>
    );
}

export default Posts;

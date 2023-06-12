import React from 'react';
import ContentSnippets from './content_snippets/Content_snippets';
import { Routes, Route } from 'react-router-dom';
import SomethingElse from './something_else/Something_else';
import "./Content.scss"
import Posts from './posts/posts';
import Post from './posts/post';
import TestAnimation from './posts/testAnimation';



const Content = () => {
    return (
        <div className='content'>

            <Routes>
                <Route path="/*" element={<ContentSnippets />} />
                <Route path="snippets" element={<ContentSnippets />} />
                <Route path="somethingElse" element={<SomethingElse />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:id" element={<Post />} />
                <Route path="test-animation" element={<TestAnimation />} />


            </Routes>

        </div>
    );
}

export default Content;

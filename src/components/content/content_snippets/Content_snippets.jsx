import React from 'react';
import "./Content_snippets.scss"
import { Navigate, redirect, useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Preloaders from './Preloaders/Preloaders';


const ContentSnippets = () => {
    const navigate = useNavigate(null)
    const location = useLocation();
    return (
        <div className='contentSnippets'>
            <div className="menu_snippets">
                <Link to={"preloaders"}>Preloaders</Link>
                {/* <button className='button_menu_snippets'
                    onClick={() => {
                         navigate("preloaders")
                        // redirect("/preloaders")
                    }}>
                    Preloaders
                </button> */}
            </div>
            <div className="snippets">
                <Routes>
                    {/* <Route path="/*" element={<ContentSnippets />} /> */}
                    <Route path="snippets/preloaders" element={<Preloaders />} />
                    {/* <Route path="somethingElse" element={<SomethingElse />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="posts/:id" element={<Post />} />
                    <Route path="test-animation" element={<TestAnimation />} /> */}
                </Routes>
            </div>
        </div>
    );
}

export default ContentSnippets;

import React from 'react';
import "./Content_snippets.scss"
import { Navigate, redirect, useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


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

            </div>
        </div>
    );
}

export default ContentSnippets;

import React from 'react';
import "./Header.css"
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const NaLink_class = ({ isActive }) => isActive ? "button_div-active" : "button_div";

const Header = () => {

    const navigate = useNavigate(null);
    // const location = useLocation();

    return (
        <div className='header'>
            <NavLink className={NaLink_class} to={"snippets"}>Snippets</NavLink>
            <NavLink className={NaLink_class} to={"posts"}>Posts</NavLink>
            <NavLink className={NaLink_class} to={"test-animation"}>Test-animation</NavLink>
            <NavLink className={NaLink_class} to={"somethingElse"}>SomethingElse</NavLink>

            {/* <div className='button_div'>
                <button onClick={() => { navigate("snippets") }}>
                    snippets
                </button>
            </div>
            <div className='button_div'>
                <button onClick={() => { navigate("somethingElse") }}>
                    something else
                </button>
            </div> */}
        </div>
    );
}

export default Header;

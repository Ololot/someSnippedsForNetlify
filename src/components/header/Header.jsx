import React from 'react';
import "./Header.css"
import { useNavigate } from 'react-router';

const Header = () => {

    const navigate = useNavigate(null);
    // const location = useLocation();

    return (
        <div className='header'>
            <div className='button_div'>
                <button onClick={() => { navigate("snippets") }}>
                    snippets
                </button>
            </div>
            <div className='button_div'>
                <button onClick={() => { navigate("somethingElse") }}>
                    something else
                </button>
            </div>
        </div>
    );
}

export default Header;

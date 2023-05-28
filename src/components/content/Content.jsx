import React from 'react';
import ContentSnippets from './content_snippets/Content_snippets';
import { Routes, Route } from 'react-router-dom';
import SomethingElse from './something_else/Something_else';


const Content = () => {
    return (
        <div className='content'>
            {/* <ContentSnippets /> */}

            <Routes>

                <Route path="/*" element={<ContentSnippets />} />
                <Route path="snippets" element={<ContentSnippets />} />
                <Route path="somethingElse" element={<SomethingElse />} />
            </Routes>

        </div>
    );
}

export default Content;

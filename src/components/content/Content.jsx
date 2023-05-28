import React from 'react';
import ContentSnippets from './content_snippets/Content_snippets';
import { Routes, Route } from 'react-router-dom';
import ContentSomethingElse from './content_something_else/Content_something_else';


const Content = () => {
    return (
        <div className='content'>
            {/* <ContentSnippets /> */}

            <Routes>

                <Route path="/*" element={<ContentSnippets />} />
                <Route path="snippets" element={<ContentSnippets />} />
                <Route path="somethingElse" element={<ContentSomethingElse />} />
            </Routes>

        </div>
    );
}

export default Content;

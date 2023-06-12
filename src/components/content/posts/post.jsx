import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data))
        // .catch((error) => { console.log(error) })
    }, [id])
    useEffect(() => {
        console.log(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(post)
    }, [post])
    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    );
}

export default Post;

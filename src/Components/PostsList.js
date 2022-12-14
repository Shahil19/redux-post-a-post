import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../features/posts/postsSlice';
import PostReactions from './PostReactions';

const PostsList = () => {
    const posts = useSelector(getAllPosts)

    const renderPosts = posts.map((post, i) => (
        <div key={i} className="card w-96 bg-yellow-100 shadow-xl mx-auto mb-5">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body.substring(0, 100)}...</p>
            </div>
            <PostReactions {...post} />
        </div>
    ))

    return (
        <>
            {renderPosts}
        </>
    );
};

export default PostsList;
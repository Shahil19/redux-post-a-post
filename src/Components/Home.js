import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../features/posts/postsSlice';

const Home = () => {
    const posts = useSelector(getAllPosts)
    console.log(posts);

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
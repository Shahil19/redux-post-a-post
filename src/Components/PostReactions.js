import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from '../features/posts/postsSlice';

const PostReactions = ({ reaction, id }) => {
    const dispatch = useDispatch()

    const reactions = {
        love: '💛',
        dislike: '👎',
        angry: "👿",
        coffee: "☕",
        middleFinger: "🖕",
    }

    const reactionEntries = Object.entries(reactions).map(([name, emoji]) => (
        <kbd
            onClick={() => (dispatch(reactionAdded({ id, name })))}
            type="button"
            key={name}
            className="kbd bg-transparent border-none hover:bg-red-100 cursor-pointer"><span className='mr-1'>{emoji}</span>{reaction[name]}<span></span> </kbd>
    ))

    return (
        <div className="flex justify-center gap-1 my-1 w-full">
            {reactionEntries}
        </div>
    );
};

export default PostReactions;
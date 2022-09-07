import React from 'react';

const PostReactions = ({ reaction }) => {

    const reactions = {
        love: '💛',
        dislike: '👎',
        angry: "👿",
        coffee: "☕"
    }

    const reactionEntries = Object.entries(reactions).map(([name, emoji]) => (
        <kbd key={name} className="kbd bg-transparent border-none hover:bg-red-100 cursor-pointer"><span className='mr-1'>{emoji}</span> <span>{reaction[name]}</span></kbd>
    ))

    return (
        <div className="flex justify-center gap-1 my-1 w-full">
            {reactionEntries}
        </div>
    );
};

export default PostReactions;
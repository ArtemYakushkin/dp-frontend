import React from "react";
import './feed.css';
import { Share } from "components/share/Share";
import { Post } from "components/post/Post";
import { Posts } from '../../falsData';

export const Feed = () => {
    return (
        <div className="feed">
            <Share />
            {Posts.map((p) => (
                <Post key={p.id} post={p} />
            ))}
        </div>
    )
};
import React from "react";
import './feed.css';
import { Share } from "components/share/Share";
import { Post } from "components/post/Post";

export const Feed = () => {
    return (
        <div className="feed">
            <Share />
            <Post />
            <Post />
            <Post />
        </div>
    )
};
import React, { useState } from 'react';
import './post.css';
import { BiDotsVerticalRounded, BiLike } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
// import Stark from '../../assets/person/stark.jpg';
// import Ironman from '../../assets/picture/iron_man.png';
import FixPhoto from '../../assets/picture/5.jpg';
import { Users } from '../../falsData';

export const Post = ({ post }) => {

    const user = Users.filter((user) => user.id === post.userId)[0];
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <div className='post'>
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={user.profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <BiDotsVerticalRounded className='postIcon'/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postTitle">{post?.title}</span>
                <img src={FixPhoto} alt="" className="postImg" />
                <span className='postText'>{post?.desc}</span>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <BiLike className='postIcon' color='#333333' onClick={likeHandler} />
                    <AiOutlineHeart className='postIcon' color='#333333' onClick={likeHandler} />
                    <span className="postLikeText">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>  
        </div>
    )
}

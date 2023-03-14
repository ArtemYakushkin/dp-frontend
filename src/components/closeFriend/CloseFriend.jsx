import React from 'react';
import './closeFriend.css';

export const CloseFriend = ({user}) => {
    return (
        <li className="sidebarFriendItem">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

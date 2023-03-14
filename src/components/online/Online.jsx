import React from 'react';
import './online.css';

export const Online = ({user}) => {
  return (
    <li className="rightbarItem">
        <div className="rightbarImgContainer">
            <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
        </div>
          <span className="rightbarFriendName">{user.username}</span>
    </li>
  )
}

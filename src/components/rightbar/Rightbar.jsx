import React from "react";
import './rightbar.css';
import { Users } from "../../falsData";
import Ad from '../../assets/picture/picturepicture_165779168136177685396417_54623.jpeg';
import { Online } from "components/online/Online";

export const Rightbar = () => {
    return (
        <div className="rightbar">
            <img src={Ad} alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarList">
                {Users.map((user) => (
                    <Online key={user.id} user={user} />
                ))}
            </ul>
        </div>
    )
};
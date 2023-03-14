import React from 'react';
import './profile.css';
import { Topbar } from "components/topbar/Topbar";
import { Sidebar } from "components/sidebar/Sidebar";
import { Feed } from "components/feed/Feed";
import { ProfileRightbar } from "components/profileRightbar/ProfileRightbar";
import CoverImg from '../../assets/picture/wallpaper.jpg';
import Stark from '../../assets/person/stark.jpg';

export const Profile = () => {
    return (
        <div>
            <Topbar />
            <div className="container">
                <div className="profileWrapp">
                    <div className='profileSidebar'>
                        <Sidebar />
                    </div>
                    <div className='profile'>
                        <div className='profileCover'>
                            <img src={CoverImg} alt="" className="profileCoverImg" />
                            <img src={Stark} alt="" className="profileUserImg" />   
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileName">IronMan</h4>
                            <span className="profileDesc">Hello, I'm Tony Stark</span>
                        </div>
                    </div>
                    <div className='profileFeed'>
                        <Feed />
                    </div>
                    <div className="profileRightbar">
                        <ProfileRightbar />
                    </div>
                </div>
            </div>
        </div>
    )
};

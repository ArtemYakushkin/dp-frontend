import React from "react";
import { IoSearchSharp, IoPersonSharp, IoNotifications, IoChatbox } from "react-icons/io5";
import './topbar.css';
import Stark from '../../assets/person/stark.jpg';

export const Topbar = () => {
    return (
        <div className="topbarContainer">
            <div className="container">
                <div className="topbarWrapper">
                    <div className="topbarLeft">
                        <span className="logo">D<span className="logo-word">ear</span> P<span className="logo-word">enfriend</span></span>
                    </div>

                    <div className="topbarCenter">
                        <div className="searchbar">
                            <IoSearchSharp className="searchIcon" />
                            <input className="searchInput" placeholder="Search for..." />
                        </div>
                    </div>

                    <div className="topbarRight">
                        <div className="topbarLinks">
                            <span className="topbarLink">Home</span>
                            <span className="topbarLink">Timeline</span>
                        </div>
                        <div className="topbarIcons">
                            <div className="topIconItem">
                                <IoPersonSharp className="topIcon" />
                                <span className="topbarIconBage">1</span>
                            </div>
                            <div className="topIconItem">
                                <IoChatbox className="topIcon" />
                                <span className="topbarIconBage">2</span>
                            </div>
                            <div className="topIconItem">
                                <IoNotifications className="topIcon" />
                                <span className="topbarIconBage">1</span>
                            </div>
                        </div>
                        <img src={Stark} alt="" className="topbarImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
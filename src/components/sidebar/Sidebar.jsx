import React from "react";
import './sidebar.css';
import { IoLogoRss, IoChatbox, IoPlayCircle, IoPeople, IoBookmark, IoHelpCircleOutline, IoBagSharp, IoCalendarOutline, IoSchool } from "react-icons/io5";
import { CloseFriend } from "components/closeFriend/CloseFriend";
import { Users } from "../../falsData";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li className="sidebarItem">
                    <IoLogoRss className="sidebarIcon" />
                    <span className="sidebarName">Feed</span>
                </li>
                <li className="sidebarItem">
                    <IoChatbox className="sidebarIcon" />
                    <span className="sidebarName">Chats</span>
                </li>
                <li className="sidebarItem">
                    <IoPlayCircle className="sidebarIcon" />
                    <span className="sidebarName">Videos</span>
                </li>
                <li className="sidebarItem">
                    <IoPeople className="sidebarIcon" />
                    <span className="sidebarName">Groups</span>
                </li>
                <li className="sidebarItem">
                    <IoBookmark className="sidebarIcon" />
                    <span className="sidebarName">Bookmarks</span>
                </li>
                <li className="sidebarItem">
                    <IoHelpCircleOutline className="sidebarIcon" />
                    <span className="sidebarName">Questions</span>
                </li>
                <li className="sidebarItem">
                    <IoBagSharp className="sidebarIcon" />
                    <span className="sidebarName">Jobs</span>
                </li>
                <li className="sidebarItem">
                    <IoCalendarOutline className="sidebarIcon" />
                    <span className="sidebarName">Events</span>
                </li>
                <li className="sidebarItem">
                    <IoSchool className="sidebarIcon" />
                    <span className="sidebarName">Courses</span>
                </li>
            </ul>
            <ul className="sidebarFriendList">
                {Users.map((user) => (
                    <CloseFriend key={user.id} user={user} />
                ))}
            </ul>
        </div>
    )
};
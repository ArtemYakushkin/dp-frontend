import React from "react";
import './sidebar.css';
import { IoLogoRss, IoChatbox, IoPlayCircle, IoPeople, IoBookmark, IoHelpCircleOutline, IoBagSharp, IoCalendarOutline, IoSchool } from "react-icons/io5";
import Baki from '../../assets/person/baki.jpg';
import Barton from '../../assets/person/barton.jpg';
import Hulk from '../../assets/person/benner.jpg';
import Spiderman from '../../assets/person/chelovek-pauk.jpg';
import Fiuri from '../../assets/person/fiyri-1.jpg';
import CaptainMarvel from '../../assets/person/kapitan.jpg';
import CaptainAmerica from '../../assets/person/kep-america.jpg';
import AntMan from '../../assets/person/leng.jpg';
import WaspMan from '../../assets/person/osa.jpg';
import Warrior from '../../assets/person/roudi.jpg';
import DocStrange from '../../assets/person/strendzh.jpg';
import BlackPanther from '../../assets/person/tchalla.jpg';
import Thor from '../../assets/person/tor.jpg';
import Falcon from '../../assets/person/uilson.jpg';
import ScarletWitch from '../../assets/person/vanda.jpg';
import BlackWidow from '../../assets/person/vdova.jpg';
import Vision from '../../assets/person/vision.jpg';

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
                <li className="sidebarFriendItem">
                    <img src={Baki} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Winter Soldier</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={Barton} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Hawkeye</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={Hulk} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Hulk</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={Spiderman} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Spiderman</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={Fiuri} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Fiuri</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={CaptainMarvel} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Captain Marvel</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={CaptainAmerica} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Captain America</span>
                </li><li className="sidebarFriendItem">
                    <img src={AntMan} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">AntMan</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={WaspMan} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Wasp Woman</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={Warrior} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Warrior</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={DocStrange} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Doctor Strange</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={BlackPanther} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Black Panther</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={Thor} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Thor</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={Falcon} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Falcon</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={ScarletWitch} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Scarlet Witch</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={BlackWidow} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Black Widow</span>
                </li>
                <li className="sidebarFriendItem">
                    <img src={Vision} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Vision</span>
                </li>
            </ul>
        </div>
    )
};